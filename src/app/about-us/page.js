import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "About Us - Edufeed Brains",
};

export default function AboutPage() {
  const values = [
    { title: "Excellence", text: "We are committed to the highest standards of quality in everything we do." },
    { title: "Collaboration", text: "We believe in the power of teamwork and working together to achieve common goals." },
    { title: "Innovation", text: "We embrace new ideas and approaches to enhance the learning experience." },
    { title: "Empathy", text: "We care deeply about our students\' well-being and success." },
  ];

  const team = [
    {
      name: "Michael Olorunfemi",
      role: "Co-CEO & Founder",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCdoeJLPBnjb7tcdKS6yUr6EfgfpUojC6FdxyS7MpBPZhoa4EpFozBy0q7wHSm2mTASaW0qaffJLiipIaV8T68yLEGNYTY7RYjj70iTcvEPYjhIOzbNBb_YLZdoVqYfb6IMT1w4Rl-wcErohBkzWLck1pNfbOYdvNNpV8D_VGLMWRAP0gPWoMBz_Orh_Tcs6DWCACOZuwrBaKKBvNXeTgw3pOQfb1F3MjiBU8H8ioPCuBi2widq-fHrCj_Tu4yvfAFdVvFRoQYKJsHl",
    },
    {
      name: "Miracle Nonso",
      role: "Co-CEO & Founder",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBnz3xXGBtWGykqZU5cwGj0chkH3VmxJZmkeAkhXs3gY-WOgGS9tB-cFmgOX3zU_h3p2Pyb0KaPECEWIkqRp0iyWcWxKr-ufRt1f2-EaoXjQdyZxphswq0Tj5RHk7GUPzf2apMxqcOCO2aiUFSAAyaauOQQY_8Y0Ye9zSnW8CG96J2iOjfA_zLR09j7jRx5fJcxN70nEqqUqV6LTw7zir43syYM5t5N9q3VK1J6C0OwkeBKAD9A4s5zBLv2XVvV70f2j16aml17Q1NQ",
    },
  ];

  return (
    <div className={styles.body}>
      <main className={styles.main}>
        {/* Intro Section */}
        <section className={styles.intro}>
          <h2 className={styles.heading}>About Edufeed Brains</h2>
          <p className={styles.subtext}>Education Feeds The Brain</p>
        </section>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <div className={styles.aboutBlock}>
            <h3 className={styles.subheading}>Our Story</h3>
            <p className={styles.paragraph}>
              Edufeed Brains was founded in 2015 with a mission to transform education in Nigeria.
              Starting as a small tutoring center, w&apos;ve grown into a leading educational brand,
              offering a wide range of courses and resources to help students succeed.
            </p>
          </div>

          <div className={styles.aboutBlock}>
            <h3 className={styles.subheading}>Our Mission</h3>
            <p className={styles.paragraph}>
              Our mission is to empower students with the knowledge and skills they need to excel
              academically and in life. We strive to create a supportive and engaging learning
              environment that fosters curiosity, critical thinking, and a lifelong love of learning.
            </p>
          </div>

          <div className={styles.aboutBlock}>
            <h3 className={styles.subheading}>Our Vision</h3>
            <p className={styles.paragraph}>
              Our vision is to be the premier educational brand in Nigeria, recognized for our
              innovative teaching methods, exceptional student outcomes, and commitment to educational
              excellence.
            </p>
          </div>
        </section>

        {/* Core Values */}
        <section className={styles.values}>
          <h3 className={styles.sectionTitle}>Our Core Values</h3>
          <div className={styles.valueGrid}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <h4 className={styles.valueTitle}>{v.title}</h4>
                <p className={styles.valueText}>{v.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.team}>
          <h3 className={styles.sectionTitle}>Meet Our Team</h3>
          <div className={styles.teamGrid}>
            {team.map((m) => (
              <div key={m.name} className={styles.member}>
                <div className={styles.imageContainer}>
                  <Image
                    src={m.img}
                    alt={m.name}
                    width={128}
                    height={128}
                    className={styles.memberImage}
                  />
                </div>
                <p className={styles.memberName}>{m.name}</p>
                <p className={styles.memberRole}>{m.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
