import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { MdMenu } from 'react-icons/md';
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
                <Link href="/team" passHref legacyBehavior>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">The Team</a>
                </Link>
              </li>
              <li>
                <Link href="/project"passHref legacyBehavior>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Projects</a>
                </Link>
              </li>
              <li>
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

      {/* Banner */}
      <header className="bg-gray-200 rounded-xl text-black p-8 text-center w-full max-w-[calc(100%-40px)] mt-20 mb-5">
        <div>
          <h1 className="text-3xl font-bold">Who We Are</h1>
          <p className="mt-2">We are a collective of inventive and imaginative African minds united by the singular goal of tackling the most significant challenges in education.</p>
        </div>
      </header>

      {/* Values section */}
      <section className="bg-gray-200 rounded-xl text-black p-8 text-center w-full max-w-[calc(100%-40px)] mt-6 mb-5">
        <h3 className="text-2xl font-bold">Our Values</h3>
        <p className="mt-2">The values that drive us: Confidence, Trust, Innovation, and Resilience. Confidence propels action, resilience sustains motivation, trust fosters collaboration, and innovation drives transformation. When these four forces converge, they can create victory.</p>
      </section>

      {/* Team Member 2 */}
      <section className="bg-gray-200 rounded-xl text-black p-8 text-center w-full max-w-[calc(100%-40px)] mt-6 mb-5">
        <h3 className="text-2xl font-bold">Where We Come From</h3>
        <p className="mt-2">We come from a hub of diverse cultures, woven together by the threads of history, language, and shared experiences. Africa, our ancestral home, resonates with vibrant traditions, ancient wisdom, and the rhythm of life.</p>
      </section>

      {/* Vision Section */}
      <section className="bg-gray-200 rounded-xl text-black p-8 text-center w-full max-w-[calc(100%-40px)] mt-6 mb-5">
        <h2 className="text-2xl font-bold">Our Mission</h2>
        <p className="mt-2">We aim to tackle the pressing challenges of Job readiness skills and Gender biases in education, creating a brighter future for our community in Rwanda.</p>
      </section>

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
        </div>
      </footer>
    </main>
  );
};

export default About;
