import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { MdMenu } from 'react-icons/md';
import { FaRibbon } from 'react-icons/fa';  // Import a red ribbon icon if available, replace with an appropriate icon if needed
import { useState } from 'react';

const About = () => {
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
      <header className="bg-blue-900 bg-opacity-90 w-full flex justify-between items-center fixed top-0 left-0 z-50 p-5">
        <Link href="/" passHref>
          <div className="flex items-center">
            <Image src="/V-images/F.jpg" alt="Logo" width={60} height={50} className="w-15 h-12" />
            <h1 className="text-white text-4xl font-bold ml-2">VERTRAUEN</h1>
          </div>
        </Link>
        <div className="relative">
          <MdMenu onClick={toggleMenu} className="text-white w-6 h-6 cursor-pointer" />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
              <ul className="py-1">
                <li>
                  <Link href="/team" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">The Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/project" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/vertrauen_._?igsh=d25hejJjcnJpZWFk" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" target="_blank" rel="noopener noreferrer">Contact Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Main content */}
      <div className="mt-20 mb-5 w-full max-w-[calc(100%-40px)]">
        <div className="flex flex-wrap justify-center items-start space-y-4 md:space-y-0 md:space-x-4">
          <section className="bg-gray-200 rounded-xl text-black p-8 text-center flex-1 relative flex flex-col justify-between max-w-xs">
            <div>
              <h1 className="text-3xl font-bold">Who We Are</h1>
              <p className="mt-2">We are a collective of inventive and imaginative African minds united by the singular goal of tackling the most significant challenges in education.</p>
            </div>
            <FaRibbon className="absolute top-2 right-2 text-red-500" /> {/* Red ribbon icon */}
          </section>
          <section className="bg-gray-200 rounded-xl text-black p-8 text-center flex-1 relative flex flex-col justify-between max-w-full">
            <div>
              <h3 className="text-2xl font-bold">Our Values</h3>
              <p className="mt-2">The values that drive us: Confidence, Trust, Innovation, and Resilience. Confidence propels action, resilience sustains motivation, trust fosters collaboration, and innovation drives transformation. When these four forces converge, they can create victory.</p>
            </div>
            <FaRibbon className="absolute top-2 right-2 text-red-500" /> {/* Red ribbon icon */}
          </section>
          <section className="bg-gray-200 rounded-xl text-black p-8 text-center flex-1 relative flex flex-col justify-between max-w-xs">
            <div>
              <h3 className="text-2xl font-bold">Where We Come From</h3>
              <p className="mt-2">We come from the great continent of Africa, a hub of diverse cultures, woven together by the threads of history, language, traditions and shared experiences.</p>
            </div>
            <FaRibbon className="absolute top-2 right-2 text-red-500" /> {/* Red ribbon icon */}
          </section>
        </div>

        {/* Strategic Vision */}
        <section className="mt-8 bg-blue-200 p-8 rounded-xl shadow-lg max-w-full mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-900">Strategic Vision</h2>
        </section>

        {/* Mission and Problem Statements */}
        <div className="flex flex-wrap justify-center items-start space-y-4 md:space-y-0 md:space-x-4 mt-6">
          <section className="bg-yellow-200 rounded-xl text-black p-8 text-center flex-1 border-4 border-yellow-500 max-w-xs">
            <h2 className="text-2xl font-bold">Our Mission Statement</h2>
            <p className="mt-2 text-justify">We aim to tackle the pressing challenges of Job readiness skills and Gender biases in education, creating a brighter future for our community in Rwanda.</p>
          </section>
          <section className="bg-yellow-200 rounded-xl text-black p-8 text-center flex-1 border-4 border-yellow-500 max-w-full">
            <h2 className="text-2xl font-bold">Problem Statement</h2>
            <p className="mt-2 text-justify">Despite high enrollment rates, a majority of Rwandan children complete primary education without solid foundational skills. In January 2024, UNICEF reported that 33% of Primary 3 students can't read grade-level text in Kinyarwanda and nearly 90% struggle with English. Additionally, 33% of youth are not in employment, education, or training. Gender biases intensifies the issue, with a high percentage of young female domestic workers lacking primary education, and 7% of women married before 18. How can we address these critical gaps in the education system in Rwanda?</p>
          </section>
        </div>
      </div>

      {/* Call to Action */}
      <section className="flex justify-center items-center mt-2 p-8">
        <a href="https://www.instagram.com/vertrauen_._?igsh=d25hejJjcnJpZWFk" className="inline-block py-2 px-4 bg-blue-900 text-white no-underline rounded transition-colors duration-300 ease hover:bg-blue-800"
          target="_blank" rel="noopener noreferrer">
          Contact Us
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-2 w-full text-center rounded-2xl pt-5 pb-5 h-15 mt-10">
        <div>
          <p>&copy; 2024 Vertrauen. All rights reserved.</p>
          <p className='tflex text-[10px] text-right items-end pr-4'>created by <a href="https://www.linkedin.com/in/ebitech14/" className="text-blue-300 ">ebitech</a></p>
        </div>
      </footer>
    </main>
  );
};

export default About;
