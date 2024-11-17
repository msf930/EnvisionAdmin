"use client";

import styles from "./ScheduleButton.module.css";
import { useEffect, useState } from "react";
import { client } from "../../sanity/lib/client";

const ScheduleButton = ({ isCenter }) => {
  const [URLData, setURLData] = useState({});
  const [loading, setLoading] = useState(true);

  const URL_DATA_QUERY = `*[_type == "info"]{Free_consultation_URL, Free_consultation_button_active}`;

  useEffect(() => {
    const fetchURL = async () => {
      setLoading(true);
      const fetchedURL = await client.fetch(URL_DATA_QUERY);
      setURLData(fetchedURL[0]);
      setLoading(false);
    };

    fetchURL();
  }, [URL_DATA_QUERY]);

  if (loading || URLData.Free_consultation_button_active === false) {
    return null;
  } else {
    return (
      <div
        className={
          isCenter ? `${styles.btnContCenter}` : `${styles.btnContStart}`
        }
      >
        <a href={URLData.Free_consultation_URL} target="_blank">
          <button className={styles.btn}>
            Schedule Your Free Consultation
          </button>
        </a>
      </div>
    );
  }
};

export default ScheduleButton;
