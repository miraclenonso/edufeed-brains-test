import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Privacy Policy - Edufeed Brains",
  description: "Read the disclaimer of Edufeed Brains.",
};

// Fetch privacy policy from WordPress REST API
async function getPrivacyPolicy() {
  const res = await fetch(
    "https://edufeedbrains.com/wp-json/wp/v2/pages?slug=disclaimer",
    { next: { revalidate: 3600 } } // Revalidate every hour
  );

  if (!res.ok) {
    throw new Error("Failed to fetch disclaimer");
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
          Read the official disclaimer of Edufeed Brains. Learn about our content accuracy, limitations, and the extent of responsibility regarding information shared on our platform.
        </p>
      </div>

      <div className={styles.disclaimerContent}>
        {/* WordPress returns HTML content, so we render it safely */}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: page.content.rendered }}
        />
      </div>
    </div>
  );
}
