"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import styles from "./AboutImageItem.module.css";

export default function ContactPageForm(props) {
  const { imageNumber } = props;

  const [imageItem, setImageItem] = useState({});

  const IMAGE_QUERY = `*[_type == "info"]{${imageNumber}}`;

  useEffect(() => {
    const fetchData = async () => {
      const fetchedImage = await client.fetch(IMAGE_QUERY);
      const filteredImage = fetchedImage[0];

      setImageItem(filteredImage);
    };

    fetchData();
  }, [IMAGE_QUERY]);

  if (imageItem[imageNumber]) {
    return (
      <Image
        src={urlFor(imageItem[imageNumber]).url()}
        alt="test"
        unoptimized
        objectFit="cover"
        layout="fill"
        loading={"lazy"}
        className={styles.aboutImg}
      />
    );
  } else {
    return <div className={styles.loadingBox}></div>;
  }
}
