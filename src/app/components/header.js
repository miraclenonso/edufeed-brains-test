"use client";

import { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Logo */}
        <div className={styles.logoSection}>
          <Image
            src="https://iili.io/KvpPbON.png"
            alt="Logo"
            width={140}
            height={33}
            className={styles.logoImage}
          />
        </div>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          <a href="/">Home</a>
          <a href="/blog/1">Blog</a>
          <a href="/about">About Us</a>
          <a href="/contact-us">Contact</a>
        </nav>

        {/* Action Section */}
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

      {/* Mobile Menu (appears BELOW header) */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.menuOpen : ""}`}>
        <hr className={styles.menuDivider} />
        <a href="/">Home</a>
        <a href="/blog/1">Blog</a>
        <a href="/about">About Us</a>
        <a href="/contact-us">Contact</a>
      </div>
    </header>
  );
}
