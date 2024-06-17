import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';

const teamMembers = [
  {
    name: 'Divine Ifechukwude',
    title: 'M.E., S.E., Tutor, Designer',
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
    name: 'Tuyisingize Sezibera Gabriel',
    title: 'Creator, Designer',
    image: '/V-images/gaby.jpg',
    description: '"To combat malnutrition and undernutrition, my mission is to advocate for equitable access to nutritious food and promote sustainable solutions in my home community(Kanombe). I am dedicated to raising awareness, driving policy change, and collaborating with communities to address root causes and empower individuals to lead healthier lives."',
  },
  {
    name: 'Nancy Agasaro',
    title: 'Creator, Designer',
    image: '/V-images/nancy.jpg',
    description: '"To combat malnutrition and undernutrition, my mission is to advocate for equitable access to nutritious food and promote sustainable solutions in my home community(Kanombe). I am dedicated to raising awareness, driving policy change, and collaborating with communities to address root causes and empower individuals to lead healthier lives."',
  },
  {
    name: 'Chiagbanweghi Moses Peter',
    title: 'Creator, Designer',
    image: '/V-images/promise.jpg',
    description: '"My mission is to empower the youth through innovative technology, creating transformative opportunities in software design, fostering job creation, and enhancing brand visibility via technology-driven solutions."',
  },
  {
    name: 'Chiagbanweghi Moses Peter',
    title: 'Creator, Designer',
    image: '/V-images/moses.jpg',
    description: '"My mission is to empower the youth through innovative technology, creating transformative opportunities in software design, fostering job creation, and enhancing brand visibility via technology-driven solutions."',
  },
  {
    name: 'Chiagbanweghi Moses Peter',
    title: 'Creator, Designer',
    image: '/V-images/promise.jpg',
    description: '"My mission is to empower the youth through innovative technology, creating transformative opportunities in software design, fostering job creation, and enhancing brand visibility via technology-driven solutions."',
  },
  // Add more team members as needed
];

export default function Team() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <main className="min-h-screen bg-gray-100 p-6 sm:p-8 flex flex-col items-center font-sans">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Vertrauen</title>
      </Head>
      <header className="bg-blue-900 bg-opacity-90 w-full flex justify-between items-center fixed top-0 left-0 z-1000 p-5">
      <Link href="/" passHref>
        <div className="flex items-center">
          <Image src="/V-images/F.jpg" alt="Logo" width={60} height={50} className="w-15 h-12" />
          <h1 className="text-white text-4xl font-bold ml-2">VERTRAUEN</h1>
        </div>
      </Link>
      <div className="relative">
        <MdMenu onClick={toggleMenu} className="text-white w-6 h-6 cursor-pointer" />
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
            <ul className="py-1">
              <li>
                <Link href="/about" passHref legacyBehavior>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/project"passHref legacyBehavior>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Projects</a>
                </Link>
                <Link href="/gallery"passHref legacyBehavior>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/vertrauen_._?igsh=d25hejJjcnJpZWFk"passHref legacyBehavior>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
      <header className="text-center my-20">
        <h1 className="text-2xl sm:text-2.5xl lg:text-3.5xl font-bold text-blue-900">Our Team</h1>
        <p className="text-lg text-gray-600 mt-2">Meet the people who make it all happen.</p>
      </header>
      <section className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-6xl mx-auto w-full">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <Image
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full mb-4 w-24 h-24 md:w-30 md:h-30 lg:w-35 lg:h-35 object-cover"
            />
            <div className="text-center">
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-blue-900 mt-1">{member.title}</p>
              <p className="text-gray-600 mt-2">{member.description}</p>
            </div>
          </div>
        ))}
      </section>
      {/* Footer */}
      <footer className="bg-blue-900 text-white py-2 w-full text-center rounded-2xl pt-5 pb-5 h-15 mt-10">
        <div>
          <p>&copy; 2024 Vertrauen. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
