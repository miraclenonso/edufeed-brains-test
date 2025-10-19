"use client";

import styles from "./app_screenshots.module.css";
import Image from "next/image";

export default function AppScreenshots() {
  const screenshots = [
    {
      title: "JAMB Quiz",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUQjy2eXUQ8xR1pzCsAS4k-D9WCGrEd_KS5mnO-2BXj74Xjh1mh1S6u9FxOnCqfbaim8yYVEBdrBDoRwlrgPs5p0vKNwo89jqLWR3Yn2xu0R7y-ImFoFk-DVKZ4p1oq5NqOEVHqWxJWzu1546g20TS3x8hk8ITPgrwqp_CWEV9mqpfZHE4OtXOHNVL0wPXLA6KOeD3RWuyEZa2SxlE-zbk5FFMS6mMMrBCmwBFxp9FSW1yZgVSZ8nIH19YMdDerjoWNkh9imoWUnkM",
      alt: "JAMB Quiz Screenshot",
    },
    {
      title: "Student Forum",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAaxes07YqG4gzMkarubHMr1lLf5-RcfRAxmPiCX9p3LF_1RSvjZZoKW77UtP4FDrLtnmXy96xhIlfoirQGBzRoM2AjxTYTPlJXGIuQHwSmpMGzk46IPBqMtjoTExf_KF4a4a7FMbNcyRORY_ahOFHUDDi2D7wMqB6OihiKYPyEy0OUqeZpCUPN9w0ctZMmvu6oeh72674VhbYSdMSj0LLLlPTzfgqWpPUlWNNETqYWJWQpf0XoP6bsayRciClMrDOLejSvEJ35dchv",
      alt: "Student Forum Screenshot",
    },
    {
      title: "Simplified Notes",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAsaTJIn6gg45dbxB0J_s-eDQmMF3iygvK6hYNEYnJC_TUFdBV72Fb4kZwMLGaGcVWaBB72eYuD8XrjoE4xtn-aBgtpZUlgNSXk9a49Bp94ogP4JomJmuEy5yLn_rKNEdSY4OXSeSIg0I4DpgkeS2zgKAmR9Lssk6KHZqMBd6d5LGoN72MGZsd-1AGN4K_sQlnwMZlEjV_Cj2yzkpb0hu4W4ZntjjeAQ4JRvmyv2d7CHYZSehxbOsVklQ0Tcaj294zm86ErWpLwI2Rn",
      alt: "Simplified Notes Screenshot",
    },
    {
      title: "Educational Videos",
      src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFZ-L_5qIwQNGZ34ILUdMBNW2jJrfWNjxx6GbaGfpRzNWoU-3nTXveLVVX86uJOswmssLmvETBR3wNWCeDKIQTurzqmE2Rk7ObzC1iw4Bw53Z9uiyin-LBt1w1u8Vj72bgM-ZqlNivF9rsIg_PnJRg7NB0tCP5qvGeEIV6MHF9SmSpWuhGsusSKa7bl4TywtUNGqQjsKI9jB5no9wmPQaCxHIv9n25pcTz8BZ9c7wuuPuz0BCC_MwkVlwLJj_EDWV-1NCmJ17hYwca",
      alt: "Educational Videos Screenshot",
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
