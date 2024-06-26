"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { MdMenu } from 'react-icons/md';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const images = [
  '/V-images/v3.jpg',
  '/V-images/v1.jpg',
  '/V-images/c.jpg',
  '/V-images/v2.jpg',
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (isLargeScreen) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => {
          const currentIndex = images.indexOf(prev);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
      }, 3000); // Change image every 3 seconds

      return () => clearInterval(interval);
    }
  }, [isLargeScreen]);

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
        <div className="md:hidden mr-4 relative">
          <MdMenu onClick={toggleMenu} className="text-white w-8 h-8 cursor-pointer" />
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50">
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
      {isLargeScreen && (
        <div className="w-full text-white py-6 sm:hidden md:block md:h-[60vh] lg:h-[70vh] xl:h-[90vh]" style={{ backgroundImage: `url(${currentImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh', marginTop: '64px' }}>
        </div>
      )}

      {/* Grid of Images for Small Screens */}
      {!isLargeScreen && (
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 p-4 sm:p-6 md:hidden mt-16">
          {images.map((img, index) => (
            <div key={index} className="relative w-full h-48 sm:h-64">
              <Image src={img} alt={`Image ${index + 1}`} layout="fill" objectFit="cover" className="rounded-lg" />
            </div>
          ))}
        </div>
      )}

      {/* Welcome Section */}
      <div className="mt-8 bg-opacity-50 bg-gray-950 p-6 rounded-lg w-full">
        <Image src="/V-images/F.jpg" alt="Logo" width={60} height={50} className="mb-4" />
        <h2 className="text-4xl text-center font-bold mb-4 text-white">Welcome to Our Think Tank</h2>
        <p className="text-gray-300 text-center text-lg">
          This is Vertrauen, where innovation meets impact to shape a better tomorrow.
        </p>
      </div>

      {/* Features Section */}
      <section className="container mx-auto py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <Link href="/about">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-blue-900 block">About Us</h3>
            <p className="text-gray-700">Mission Statement, Problem Statement, Proposed Solutions, Prototype, Who we are, Our values, where we come from...</p>
          </div>
        </Link>
        <Link href="/team">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-blue-900 block">Meet the Team</h3>
            <p className="text-gray-700">Meet the dedicated individuals behind our success. Our talented team brings expertise, creativity, and passion to every project.</p>
          </div>
        </Link>
        <Link href="/project">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full hover:shadow-xl transition-shadow">
            <h3 className="text-2xl font-bold mb-3 text-blue-900 block">Projects</h3>
            <p className="text-gray-700">Explore our completed projects, including E-Lab Challenges 1-6, that shows our commitment to excellence and innovation.</p>
          </div>
        </Link>
        <Link href="/gallery">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between h-full hover:shadow-xl transition-shadow">
          <h3 className="text-2xl font-bold mb-3 text-blue-900 block">Media Gallery</h3>
          <p className="text-gray-700">Explore our gallery to get a visual insight into our projects, team, events, and moments that highlight our journey and achievements.</p>
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
