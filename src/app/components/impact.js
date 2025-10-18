import React from "react";
import styles from "./impact.module.css";

export default function Impact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Our Impact</h2>

        <div className={styles.grid}>
          {/* === Card 1 === */}
          <div className={styles.card}>
            <p className={styles.stat}>500K+</p>
            <p className={styles.label}>Students Reached</p>
            <p className={styles.growth}>+20% YoY Growth</p>
          </div>

          {/* === Card 2 === */}
          <div className={styles.card}>
            <p className={styles.stat}>100+</p>
            <p className={styles.label}>Schools Partnered</p>
            <p className={styles.growth}>+15% This Quarter</p>
          </div>

          {/* === Card 3 === */}
          <div className={styles.card}>
            <p className={styles.stat}>95%</p>
            <p className={styles.label}>Positive Feedback</p>
            <p className={styles.growth}>From User Surveys</p>
          </div>
        </div>
      </div>
    </section>
  );
};
