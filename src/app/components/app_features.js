"use client";
import React from "react";
import styles from "./app_features.module.css";

const AppFeatures = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Our App Key Features</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                quiz
              </span>
            </div>
            <h3 className={styles.cardTitle}>Practice UTME</h3>
            <p className={styles.cardText}>
              Access thousands of past questions to prepare for your exams.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                style
              </span>
            </div>
            <h3 className={styles.cardTitle}>Take Flashcards</h3>
            <p className={styles.cardText}>
              Memorize key concepts with interactive flashcards.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                exercise
              </span>
            </div>
            <h3 className={styles.cardTitle}>Topic Drill</h3>
            <p className={styles.cardText}>
              Practice questions on a specific topic to master it.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                description
              </span>
            </div>
            <h3 className={styles.cardTitle}>Notes</h3>
            <p className={styles.cardText}>
              Study comprehensive notes on all topics.
            </p>
          </div>

          <div className={styles.card} style={{marginBottom: 50}}>
            <div className={styles.iconWrapper}>
              <span className={`material-symbols-outlined ${styles.icon}`}>
                menu_book
              </span>
            </div>
            <h3 className={styles.cardTitle}>JAMB Syllabus</h3>
            <p className={styles.cardText}>
              Get the official UTME syllabus for all subjects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;
