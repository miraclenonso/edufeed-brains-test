"use client";

import styles from './footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div>
            <h3 className={styles.heading}>Quick Links</h3>
            <ul className={styles.list}>
              <li><a href="./" className={styles.link}>Home</a></li>
              <li><a href="#" className={styles.link}>Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Company</h3>
            <ul className={styles.list}>
              <li><a href="./about" className={styles.link}>About Us</a></li>
              <li><a href="./contact-us" className={styles.link}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className={styles.heading}>Legal</h3>
            <ul className={styles.list}>
              <li><a href="./privacy-policy" className={styles.link}>Privacy Policy</a></li>
              <li><a href="./disclaimer" className={styles.link}>Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2025 Edufeed Brains. All rights reserved.</p>
          <div className={styles.socials}>
            <a href="https://x.com/edufeedbrains" className={styles.icon}>
              {/* Twitter */}
              <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256">
                <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z"></path>
              </svg>
            </a>
            <a href="https://facebook.com/edufeedbrains" className={styles.icon}>
              {/* Facebook */}
              <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256">
                <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
              </svg>
            </a>
            <a href="https://instagram.com/edufeedbrains" className={styles.icon}>
              {/* Instagram */}
              <svg fill="currentColor" height="24" width="24" viewBox="0 0 256 256">
                <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
