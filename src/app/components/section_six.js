import styles from "./section_six.module.css";
import Image from "next/image";

export default function SectionSix() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Ready to Transform Your Learning Journey?
        </h2>
        <p className={styles.paragraph}>
          Join thousands of students who are already benefiting from Edufeed
          Brains&apos; innovative educational solutions.
        </p>
        <a href="#" className={styles.button}>
          <Image
            src="https://iili.io/K8p9UI2.png"
            alt="Google Play Icon"
            width={24}
            height={24}
            className={styles.icon}
          />
          <span>Get on<br/>Google Play</span>
        </a>
      </div>
    </section>
  );
}
