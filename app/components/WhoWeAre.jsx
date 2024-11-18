"use client";

import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";

import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import styles from "@/app/about/styles.module.css";

export default function WhoWeAre() {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  const INFO_DATA_QUERY = `*[_type == "info"]{Who_we_are_bio, Who_we_are_image, Who_we_are_image_active}`;

  useEffect(() => {
    const fetchInfo = async () => {
      setLoading(true);
      const fetchedInfo = await client.fetch(INFO_DATA_QUERY);
      setInfo(fetchedInfo[0]);
      setLoading(false);
    };

    fetchInfo();
  }, [INFO_DATA_QUERY]);
  // console.log(info);

  return (
    <div className={styles.whoCont}>
      <h2>Who We Are</h2>
      {info?.Who_we_are_image_active && info?.Who_we_are_image ? (
        <div className={styles.whoInfoCont}>
          <div className={styles.whoInfoImgCont}>
            <Image
              src={urlFor(info?.Who_we_are_image).url()}
              alt="Kristina Kefalas"
              unoptimized
              objectFit="cover"
              layout="fill"
              className={styles.streamlineImg}
            />
          </div>

          <div className={styles.whoInfoTextCont}>
            <h3>Kristina Kefalas</h3>
            <p>{info?.Who_we_are_bio ? info?.Who_we_are_bio : "loading..."}</p>
          </div>
        </div>
      ) : (
        <div className={styles.whoInfoTextCont2}>
          <h3>Kristina Kefalas</h3>
          <p>{info?.Who_we_are_bio ? info?.Who_we_are_bio : "loading..."}</p>
        </div>
      )}
    </div>
  );
}
