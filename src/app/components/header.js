"use client";

import { useState } from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Function to close the mobile menu
  const handleCloseMenu = () => setMenuOpen(false);

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
          <Link href="/">Home</Link>
          <Link href="/blog/1">Blog</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact-us">Contact</Link>
        </nav>

        {/* Action Section */}
        <div className={styles.actionSection}>
          <Link href="#" className={styles.downloadBtn}>
            Download App
          </Link>

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
        <Link href="/" onClick={handleCloseMenu}>Home</Link>
        <Link href="/blog/1" onClick={handleCloseMenu}>Blog</Link>
        <Link href="/about" onClick={handleCloseMenu}>About Us</Link>
        <Link href="/contact-us" onClick={handleCloseMenu}>Contact</Link>
      </div>
    </header>
  );
}
