// pages/team.tsx

import Image from 'next/image';
import Link from 'next/link';
import './team.css'; // Import the CSS file


const teamMembers = [
  {
    name: 'Divine Ifechukwude',
    title: 'M.E., S.E., Designer',
    image: '/V-images/divine.jpg',
    description: '“I am driven by the desire to cause positive change in the Education sector in my local community in Nigeria. I aim is to instill a better learning mindset and create a superior learning environment for future generations within 10 years."',
  },
   {
    name: 'Promise Kemah Kokeh',
    title: 'Creator, Designer',
    image: '/V-images/promise.jpg',
    description: '"I aim for a bright future for my community - Liberia - through the creation of sustainable well pay jobs."',
  },
  {
    name: 'Gabriel',
    title: 'Creator, Designer',
    image: '/V-images/gaby.jpg',
    description: '"To combat malnutrition and undernutrition, my mission is to advocate for equitable access to nutritious food and promote sustainable solutions in my home community(Kanombe). I am dedicated to raising awareness, driving policy change, and collaborating with communities to address root causes and empower individuals to lead healthier lives."',
  },
  // Add more team members as needed
];

export default function Team() {
  return (
    <main className="main-container">
      <Link href="/" passHref>
        <div className="header-container">
          <Image src="/V-images/F.jpg" alt="Logo" width={60} height={50} />
          <h1 className="header-title">VERTRAUEN</h1>
        </div>
      </Link>
      <header className="header-section">
        <h1 className="header-title-main">Our Team</h1>
        <p className="header-subtitle">Meet the people who make it all happen.</p>
      </header>
      <section className="team-section">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <Image 
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="team-member-image"
            />
            <div className="team-member-details">
              <h3 className="team-member-name">{member.name}</h3>
              <p className="team-member-title">{member.title}</p>
              <p className="team-member-description">{member.description}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}