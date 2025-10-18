"use client";
import React from "react";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Latest Blog Posts</h2>

      <div className={styles.grid}>
        {/* === Blog 1 === */}
        <div className={styles.card}>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBIM7r1XXgdDdl5SjCi9UZI8L4zzRhpyjeIUdOzT-kw1mT9vn8VT-BNtanBt0u1P2ISCzUc5bkGHhiuqZ67-A1fIuvsKEyKkzNDFCZ3i8vLhpldHuRMel_m1xYg7SUCoXq_4DW4JYTyKlhSZIuzEo45rN8ZfgDgVFPFj5e3pwVNMOSxetA__dOwMDw8kjc3tXTmXyoa0IYqDna1oaM0FE01taUeHb4ivkXvMf17SLKYwv9cusSHRT-M49ONM_M4UMPnxu8YnBMdOOH0")',
            }}
          ></div>
          <div>
            <p className={styles.title}>Tips for Effective Study Habits</p>
            <p className={styles.desc}>
              Learn how to maximize your study time and improve your academic
              performance.
            </p>
          </div>
        </div>

        {/* === Blog 2 === */}
        <div className={styles.card}>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwHAM6bznMlo_4D-RPi19fgCe3g-52W4MfEX0dK0B2M-l6onKWtxq75wqeAfrQ27rtvqEh-rY69PfmYC57MZFdFNm7Q_dZsztGn0BXT4yzv5BYViBYrq9e_F-LeeJRgY5sSrZlN-beem5x39zIub-EWdMcOtEXX5-InCpCTC9kLmrg_t1ztWytQY_PiE3x4bjT70kgpqYL75OSPbk7yyJCSvomBWqCZaJ6DCxoBLryvyooiYM-9_JDPwtv9Pnm6kgH60xKxF1oHr7W")',
            }}
          ></div>
          <div>
            <p className={styles.title}>
              Understanding the Nigerian Education System
            </p>
            <p className={styles.desc}>
              An overview of the structure and challenges within the Nigerian
              education sector.
            </p>
          </div>
        </div>

        {/* === Blog 3 === */}
        <div className={styles.card}>
          <div
            className={styles.image}
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAtugBy20Wd-aje_mRTcNFRdG4shuer0SQJeLKooXdUW7jmAgTWbr6HvQ5weNZBzeReTJwM-0n_e8r42HcvL7AIhP31-iC4pWJJj_vgnWM-mIkjfCf6ReQrWTQ2dsM_5CrpeZF8R9ugZx0zZZ3uPFELFGftSo7mpaFFabyd6Ialr9t2oHzwjb62emLfr95DHhCxwo4tR5lOTp8RDkyZ7KXAalBJH70ZR6uBC69DLhktlQClK0gGx6ZR-rjjJ6rDUzQ7hSqOlnfus78b")',
            }}
          ></div>
          <div>
            <p className={styles.title}>
              The Role of Technology in Modern Learning
            </p>
            <p className={styles.desc}>
              Explore the latest tools and platforms that are shaping the future
              of education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
