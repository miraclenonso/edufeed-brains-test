import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy - Edufeed Brains",
};

// Fetch privacy policy from WordPress REST API
async function getPrivacyPolicy() {
  const res = await fetch(
    "https://edufeedbrains.com/wp-json/wp/v2/pages?slug=privacy-policy",
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch privacy policy");
  }

  const data = await res.json();
  return data[0]; // WordPress returns an array of pages
}

export default async function PrivacyPolicy() {
  const page = await getPrivacyPolicy();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>{page.title.rendered}</h2>
        <p className={styles.subtitle}>
          This page outlines how Edufeed Brains collects, uses, and protects
          your personal information.
        </p>
      </div>

      <div className={styles.policyContent}>
        {/* WordPress returns HTML content, so we render it safely */}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </div>
    </div>
  );
}
