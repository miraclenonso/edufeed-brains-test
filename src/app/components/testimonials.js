"use client";
import React from "react";
import styles from "./testimonials.module.css";

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Testimonials</h2>

      <div className={styles.grid}>
        {/* === Testimonial 1 === */}
        <div className={styles.card}>
          <div className={styles.profile}>
            <div
              className={styles.avatar}
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAqEAUm9hU9jvKPEPdlv9Vw0nAqytD0g3dnXs_EgplhkvAhsMG_2JRaeSh8mxayfIa3PzTsgvsUjQPddP97aerhS1VswVgDyZdoAyGDzffYDiLbHX_pf18-mKJVsKBdPTHVGRezYPKSuwkZZjjEMEeeP2UUAJQoOpvJSHGkYIWfCfV4bPi9Hogh5AMDr-g020Q06Sv9agBL6fM2bjDRTPZDhpAcXj4jKHqHY6eMM3g7ltDCKM5Riquho7UtzXmXypmCxe_t0LUzkIzT")',
              }}
            ></div>
            <div>
              <p className={styles.name}>Aisha Bello</p>
              <p className={styles.role}>Student</p>
            </div>
          </div>

          {/* 5 filled stars */}
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`material-symbols-outlined ${styles.filled}`}>
                star
              </span>
            ))}
          </div>

          <p className={styles.text}>
            &quot;Edufeed Brains has transformed my learning experience. The app is
            user-friendly and the content is top-notch.&quot;
          </p>
        </div>

        {/* === Testimonial 2 === */}
        <div className={styles.card}>
          <div className={styles.profile}>
            <div
              className={styles.avatar}
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAoZ8t7Veve3EGcaytxbQ0QlRWG3LJcruHfrcvXPF2wZpMsixLsTKV_tLwvFOW9_Evv3_wdhS2NLQmxWzPT6KJ12P2hyvhoCDMY1G3yT8Lw7t2oRqQfe46i5T7PiK-GzdU7ZPtitaY6lch9Cu0DBH4FnwjW-xd3brdRstnTh3npsblfm3Ds7itaKxi-PusW30zcgod2pMspWYzYkmcub8pUBdwdoEi6es_Ld4tQAZ6TcLBW4LsiUXagy-0NKW2Wa6MXVwLFECYDiTSL")',
              }}
            ></div>
            <div>
              <p className={styles.name}>Chukwuma Eze</p>
              <p className={styles.role}>Student</p>
            </div>
          </div>

          {/* 4 filled, 1 empty */}
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className={`material-symbols-outlined ${
                  i < 4 ? styles.filled : styles.empty
                }`}
              >
                star
              </span>
            ))}
          </div>

          <p className={styles.text}>
            &quot;The web portal is a great resource for my studies. I especially
            appreciate the interactive quizzes.&quot;
          </p>
        </div>

        {/* === Testimonial 3 === */}
        <div className={styles.card}>
          <div className={styles.profile}>
            <div
              className={styles.avatar}
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBjwfcUEpVRgWm5FOefbQHww4oB17RaV7pRPZkAVjdbWm8CZa-CfrRm5n0tbba4umXRda6xRf-h8fdNs4rh3CJBvo2o0C-x5LS9mHfgnwIHtjs-ZYea-cvqgn9J8mwwC3tzGlamQ6V08CPrOhnfjc6bZyejqWsPX5vCaAMVv3ndDTpGgT2g4EefSp0MHjcox7rEMzag3F82gNBJD2XAHLcIKMNkIiDxcnQ4VsfN-lxREE7J0WRRJkmE2n3iaiGkMWo8iui1_XSq0KZt")',
              }}
            ></div>
            <div>
              <p className={styles.name}>Fatima Hassan</p>
              <p className={styles.role}>Teacher</p>
            </div>
          </div>

          {/* 5 filled stars */}
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`material-symbols-outlined ${styles.filled}`}>
                star
              </span>
            ))}
          </div>

          <p className={styles.text}>
            &quot;Our school has seen significant improvements in student performance
            since partnering with Edufeed Brains.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}
