"use client";

import styles from "./app_screenshots.module.css";
import Image from "next/image";

export default function AppScreenshots() {
  const screenshots = [
    {
      title: "UTME Practice",
      src: "https://iili.io/KSHVJne.png",
      alt: "UTME Practice Screenshot",
    },
    {
      title: "Flashcards",
      src: "https://iili.io/KSHSNOg.png",
      alt: "Flashcards Screenshot",
    },
    {
      title: "All UTME Syllabus",
      src: "https://iili.io/KSHbYtp.png",
      alt: "UTME Syllabus Screenshot",
    },
    {
      title: "Notes",
      src: "https://iili.io/KSJ9GLl.png",
      alt: "Notes Screenshot",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>App Screenshots</h2>
        </div>

        <div className={styles.screenshotsWrapper}>
          {screenshots.map((shot, i) => (
            <div key={i} className={styles.screenshotItem}>
              <div className={styles.phoneFrame}>
                <div className={styles.notch}></div>
                <div className={styles.imageWrapper}>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    fill
                    className={styles.image}
                  />
                </div>
              </div>
              <p className={styles.caption}>{shot.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
