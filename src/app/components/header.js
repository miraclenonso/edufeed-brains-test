"use client";

import { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          <Image
            src="https://iili.io/KvpPbON.png"
            alt="Logo"
            width={140}
            height={33}
            className={styles.logoImage}
          />
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ""}`}>
          <a href="#">Home</a>
          <a href="#">Blog</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </nav>

        <div className={styles.actionSection}>
          <a href="#" className={styles.downloadBtn}>
            Download App
          </a>
          <Image
            src="https://iili.io/K8HJc9S.png"
            alt="menu icon"
            width={24}
            height={24}
            className={styles.menuImage}
            onClick={() => setMenuOpen(!menuOpen)}
          />
        </div>
      </div>

      {/* Overlay dropdown menu for mobile */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}>
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">About Us</a>
        <a href="#">Contact</a>
      </div>
    </header>
  );
}
