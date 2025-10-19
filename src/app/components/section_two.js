import React from "react";
import styles from "./section_two.module.css";

const SectionTwo = () => {
  return (
    <section className={styles.sectionWrapper}>
      {/* === The Problem === */}
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <span className="material-symbols-outlined">error</span>
        </div>
        <h2 className={styles.heading}>The Problem</h2>
        <p className={styles.paragraph}>
          Many Nigerian students lack access to high-quality education. While some
          institutions offer excellent learning experiences, their tuition fees are
          extremely high, making them inaccessible to most learners.
        </p>
      </div>

      {/* === Our Solution === */}
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <span className="material-symbols-outlined">lightbulb</span>
        </div>
        <h2 className={styles.heading}>Our Solution</h2>
        <p className={styles.paragraph}>
          Edufeed Brains provides free, high-quality educational resources designed to
          make premium learning accessible to every Nigerian student. Our digital tools
          and study platforms deliver engaging, effective, and affordable education for all.
        </p>
      </div>

      {/* === Our Mission === */}
      <div className={styles.card}>
        <div className={styles.iconWrapper}>
          <span className="material-symbols-outlined">flag</span>
        </div>
        <h2 className={styles.heading}>Our Mission</h2>
        <p className={styles.paragraph}>
          Our mission is to empower millions of students and significantly reduce the
          national failure rate within the next few years by providing accessible
          education, fostering critical thinking, and inspiring academic excellence.
        </p>
      </div>
    </section>
  );
};

export default SectionTwo;
