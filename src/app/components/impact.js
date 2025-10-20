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
            <p className={styles.label}>Students Engaged</p>
            <span className={styles.growth}>Learning Across Nigeria</span>
          </div>

          <div className={styles.card}>
            <h3 className={styles.stat}>10K+</h3>
            <p className={styles.label}>Questions Practiced</p>
            <span className={styles.growth}>Through CBT and Quizzes</span>
          </div>

          <div className={styles.card}>
            <h3 className={styles.stat}>95%</h3>
            <p className={styles.label}>User Satisfaction</p>
            <span className={styles.growth}>Based on App Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
