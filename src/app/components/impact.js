import React from "react";
import styles from "./impact.module.css";

export default function Impact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Impact</h2>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3 className={styles.stat}>500K+</h3>
            <p className={styles.label}>Students Reached</p>
            <span className={styles.growth}>+20% YoY Growth</span>
          </div>

          <div className={styles.card}>
            <h3 className={styles.stat}>100+</h3>
            <p className={styles.label}>Schools Partnered</p>
            <span className={styles.growth}>+15% This Quarter</span>
          </div>

          <div className={styles.card}>
            <h3 className={styles.stat}>95%</h3>
            <p className={styles.label}>Positive Feedback</p>
            <span className={styles.growth}>From User Surveys</span>
          </div>
        </div>
      </div>
    </section>
  );
}
