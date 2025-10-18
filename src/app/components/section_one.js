"use client";

import styles from "./section_one.module.css";

export default function SectionOne() {
  return (
    <main className={styles.main}>
      <section className={styles.section}>
        <div className={styles.container}>
          <h1 className={styles.heading}>
            Empowering Minds, Shaping Futures
          </h1>
          <p className={styles.paragraph}>
            Edufeed Brains is dedicated to providing innovative educational resources and
            tools to students across Nigeria, fostering a love for learning
            and academic excellence.
          </p>
          <div className={styles.buttonGroup}>
            <a href="#" className={styles.primaryBtn}>
              Explore Our Blog
            </a>
            <a href="#" className={styles.secondaryBtn}>
              Download Our App
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
