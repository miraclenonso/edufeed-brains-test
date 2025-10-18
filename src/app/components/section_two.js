"use client";
import React from "react";
import styles from "./section_two.module.css";

const SectionTwo = () => {
  const sections = [
    {
      number: "01",
      title: "The Problem",
      text: `Many Nigerian students lack access to high-quality education. While some institutions offer excellent learning experiences, their tuition fees are extremely high, making them inaccessible to most learners. As a result, many students depend on exam malpractice instead of true understanding.`,
    },
    {
      number: "02",
      title: "Our Solution",
      text: `Edufeed Brains provides free, high-quality educational resources designed to make premium learning accessible to every Nigerian student. Our digital tools and study platforms deliver engaging, effective, and affordable education for all.`,
    },
    {
      number: "03",
      title: "Our Mission",
      text: `Our mission is to empower millions of students and significantly reduce the national failure rate within the next few years by providing accessible education, fostering critical thinking, and inspiring academic excellence.`,
    },
  ];

  return (
    <section className={styles.sectionWrapper}>
      {sections.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.number}>{item.number}</div>
          <h2 className={styles.heading}>{item.title}</h2>
          <p className={styles.paragraph}>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default SectionTwo;
