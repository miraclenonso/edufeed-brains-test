import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact Us - Edufeed Brains",
};

export default function ContactUs() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Contact Us</h2>
        <p className={styles.subtitle}>
          We&apos;d love to hear from you. Please use our contact details to get in touch.
        </p>
      </div>

      <div className={styles.cardsWrapper}>
        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Our Contact Information</h2>
          <div className={styles.contactList}>
            <a href="tel:+2347079987738" className={styles.contactItem}>
              <span className={`material-symbols-outlined ${styles.icon}`}>phone</span>
              <span>+234 707 998 7738</span>
            </a>

            <a href="mailto:contact@edufeedbrains.com" className={styles.contactItem}>
              <span className={`material-symbols-outlined ${styles.icon}`}>email</span>
              <span>contact@edufeedbrains.com</span>
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Connect with Us</h2>
          <div className={styles.socials}>
            <a href="https://facebook.com/edufeedbrains" className={styles.socialLink}>
              <svg aria-hidden="true" className={styles.svgIcon} fill="currentColor" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 
                  2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797
                  c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 
                  2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 
                  1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 
                  21.128 22 16.991 22 12z"
                ></path>
              </svg>
            </a>

            <a href="https://x.com/edufeedbrains" className={styles.socialLink}>
              <svg aria-hidden="true" className={styles.svgIcon} fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 
                         11.675-11.675 0-.178 0-.355-.012-.53A8.348 
                         8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 
                         4.118 4.118 0 001.804-2.27 8.224 8.224 
                         0 01-2.605.996 4.107 4.107 0 00-6.993 
                         3.743 11.65 11.65 0 01-8.457-4.287 
                         4.106 4.106 0 001.27 5.477A4.072 
                         4.072 0 012.8 9.71v.052a4.105 4.105 
                         0 003.292 4.022 4.095 4.095 0 01-1.853.07 
                         4.108 4.108 0 003.834 2.85A8.233 
                         8.233 0 012 18.407a11.616 11.616 
                         0 006.29 1.84"></path>
              </svg>
            </a>

            <a href="https://instagram.com/edufeedbrains" className={styles.socialLink}>
              <svg aria-hidden="true" className={styles.svgIcon} fill="currentColor" viewBox="0 0 24 24">
                <path
                  clipRule="evenodd"
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.714.01 
                     3.66.052 1.074.05 1.805.275 
                     2.439.544.69.29 1.255.715 
                     1.815 1.274.56.56.985 1.126 
                     1.274 1.816.27.633.493 1.365.544 
                     2.44.042.945.052 1.23.052 
                     3.66 0 2.43-.01 2.714-.052 
                     3.66-.05 1.074-.275 1.805-.544 
                     2.439-.29.69-.715 1.255-1.274 
                     1.815-.56.56-1.126.985-1.816 
                     1.274-.633.27-1.365.493-2.44.544-.945.042-1.23.052-3.66.052-2.43 
                     0-2.714-.01-3.66-.052-1.074-.05-1.805-.275-2.439-.544-.69-.29-1.255-.715-1.815-1.274-.56-.56-.985-1.126-1.274-1.816-.27-.633-.493-1.365-.544-2.44-.042-.945-.052-1.23-.052-3.66 
                     0-2.43.01-2.714.052-3.66.05-1.074.275-1.805.544-2.439.29-.69.715-1.255 
                     1.274-1.815.56-.56 1.126-.985 
                     1.816-1.274.633-.27 1.365-.493 
                     2.44-.544.945-.042 1.23-.052 
                     3.66-.052zM12 6.5a5.5 5.5 0 
                     100 11 5.5 5.5 0 000-11zm0 
                     9a3.5 3.5 0 110-7 3.5 3.5 
                     0 010 7zm5.25-9.75a1.25 
                     1.25 0 100 2.5 1.25 1.25 
                     0 000-2.5z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
