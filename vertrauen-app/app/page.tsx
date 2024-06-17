// pages/index.tsx 
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { MdMenu } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const images = [
  '/V-images/a.jpg',
  '/V-images/b.jpg',
  '/V-images/c.jpg',
  '/V-images/d.jpg',
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        const currentIndex = images.indexOf(prev);
        const nextIndex = (currentIndex + 1) % images.length;
        return images[nextIndex];
      });
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gray-100">
      <Head>
        <title>Vertrauen</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header with Navigation */}
      <header className="bg-blue-900 w-full text-white py-4 flex justify-between items-center fixed top-0 left-0 z-50">
        <div className="flex items-center ml-4">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image src="/V-images/F.jpg" alt="Logo" width={60} height={50} />
              <h1 className="text-3xl font-bold ml-2">VERTRAUEN</h1>
            </div>
          </Link>
        </div>
        <nav className="hidden md:flex mr-4">
          <Link href="/about" className="mx-2 hover:underline">About Us</Link>
          <Link href="/team" className="mx-2 hover:underline">Meet the Team</Link>
          <Link href="/project" className="mx-2 hover:underline">Projects</Link>
          <Link href="/gallery" className="mx-2 hover:underline">Media Gallery</Link>
          <Link href="https://www.instagram.com/vertrauen_._?igsh=d25hejJjcnJpZWFk" className="mx-2 hover:underline">Contact</Link>
        </nav>
        <div className="md:hidden mr-4">
          <MdMenu onClick={toggleMenu} className="text-white w-8 h-8 cursor-pointer" />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
              <ul className="py-1">
                <li>
                  <Link href="/about" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">About Us</a>
                  </Link>
                </li>
                <li>
                  <Link href="/team" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Meet the Team</a>
                  </Link>
                </li>
                <li>
                  <Link href="/project" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Media Gallery</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/vertrauen_._?igsh=d25hejJjcnJpZWFk" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Contact</a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      {/* Combined Banner and Introduction Section */}
      <div className="w-full text-white py-6" style={{ backgroundImage: `url(${currentImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '120vh', marginTop: '64px' }}>
      </div>

      {/* Welcome Section */}
      <div className="mt-8 bg-opacity-50 bg-gray-950 p-6 rounded-lg w-full">
        <Image src="/V-images/F.jpg" alt="Logo" width={60} height={50} className="mb-4" />
        <h2 className="text-4xl text-center font-bold mb-4 text-white">Welcome to Our Think Tank</h2>
        <p className="text-gray-300 text-center text-lg">
          This is Vertrauen, where innovation meets impact to shape a better tomorrow."
        </p>
      </div>

      {/* Features Section */}
      <section className="container mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <Link href="/about">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-3">About Us</h3>
            <p className="text-gray-700">Who we are, our values that drive us, where we come from and Our Mission</p>
          </div>
        </Link>
        <Link href="/team">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-3">Meet the Team</h3>
            <p className="text-gray-700">Meet our team of experts who are at the forefront of their respective fields.</p>
          </div>
        </Link>
        <Link href="/project">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-semibold mb-3">Projects</h3>
            <p className="text-gray-700">See our various completed projects.</p>
          </div>
        </Link>
        <Link href="/gallery">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-semibold mb-3">Media Gallery</h3>
          <p className="text-gray-700">Check out our Media Gallery.</p>
        </div>
        </Link>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto py-16 text-center">
        <a
          href="https://www.instagram.com/vertrauen_._?igsh=d25hejJjcnJpZWFk"
          className="inline-block bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          target="_blank" rel="noopener noreferrer">
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="w-full bg-blue-900 text-white py-4 rounded-xl">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <a href="https://www.youtube.com/@VERTRAUEN148" className="mx-2"
            target="_blank" rel="noopener noreferrer"><FaYoutube className="inline-block mr-2" /><i className="fab fa-youtube">youtube@vertrauen</i></a>
            <a href="https://www.instagram.com/vertrauen_._?igsh=d25hejJjcnJpZWFk" className="mx-2"
            target="_blank" rel="noopener noreferrer"><FaInstagram className="inline-block mr-2" /><i className="fab fa-instagram">instagram@vertrauen_._</i> </a>
          </div>

          <p className="text-sm">Kigali, Rwanda.</p>
          <p className="text-sm">Email: info@vertrauen.com | Phone: 0000000000</p>
          <p className="text-sm">&copy; 2024 Vertrauen. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
