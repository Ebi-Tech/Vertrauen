  import React from 'react';
  import Image from 'next/image';
  import Link from 'next/link';
  import styles from '@/pages/about.module.css'; // Import CSS module
  import Head from 'next/head';


  const About = () => {
    return (
      <main className={styles.container}>
        <Head>
        <link rel="icon" href="/favicon.ico" />
          <title>Vertrauen</title>
        </Head>
        <header className={styles.header}>
          <Link href="/" passHref>
            <div className={styles.headerContent}>
              <Image src="/V-images/F.jpg" alt="Logo" width={60} height={50} className={styles.logo} />
              <h1 className={styles.title}>VERTRAUEN</h1>
            </div>
          </Link>
        </header>

        {/* Banner */}
        <header className={styles.banner}>
          <div className={styles.bannerContent}>
            <h1 className={styles.bannerTitle}>Who We Are</h1>
            <p className={styles.bannerText}>We are a collective of inventive and imaginative African minds united by the singular goal of tackling the most significant challenges in education.</p>
          </div>
        </header>

        {/* Values section */}
  <section className={styles.valueSection}>
    <div className={styles.banner}>
      <h3 className={styles.valueTitle}>Our Values</h3>
      <p className={styles.valueText}>The values that drive us: Confidence, Trust, Innovation, and Resilience. Confidence propels action, resilience sustains motivation, trust fosters collaboration, and innovation drives transformation. When these four forces converge, they can create victory.</p>
    </div>
  </section>

  {/* Team Member 2 */}
  <section className={styles.teamMember}>
    <div className={styles.banner}>
      <h3 className={styles.teamMemberTitle}>Where We Come From</h3>
      <p className={styles.teamMemberText}>We come from a hub of diverse cultures, woven together by the threads of history, language, and shared experiences. Africa, our ancestral home, resonates with vibrant traditions, ancient wisdom, and the rhythm of life.</p>
    </div>
  </section>

        {/* Vision Section */}
        <section className={styles.visionSection}>
          <h2 className={styles.visionTitle}>Our Mission</h2>
          <p className={styles.visionText}>We aim to tackle the pressing challenges of Job readiness skills and Gender biases in education, creating a brighter future for our community in Rwanda.
          </p>
        </section>

        {/* Call to Action */}
        <section className={styles.callToAction}>
          <a href="https://www.instagram.com/vertrauen_._?igsh=d25hejJjcnJpZWFk" className={styles.contactLink}>
            Contact Us
          </a>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p className={styles.footerText}>&copy; 2024 Vertrauen. All rights reserved.</p>
          </div>
        </footer>
      </main>
    );
  };

  export default About;