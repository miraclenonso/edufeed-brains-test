"use client";

import styles from "./section_one.module.css";
import Image from "next/image";

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
              <Image
                src="https://iili.io/K8p9UI2.png"
                alt="Google Play Icon"
                width={20}
                height={20}
                className={styles.playIcon}
              />
              Download App
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
