import styles from './section_six.module.css';

export default function SectionSix() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Ready to Transform Your Learning Journey?
        </h2>
        <p className={styles.paragraph}>
          Join thousands of students who are already benefiting
          from Edufeed Brains&apos; innovative educational solutions.
        </p>
        <a href="#" className={styles.button}>
          Get Started
        </a>
      </div>
    </section>
  );
}
