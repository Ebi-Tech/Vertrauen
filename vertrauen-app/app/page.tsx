  "use client";
  import { useState, useEffect } from 'react';
  import Image from 'next/image';
  import Link from 'next/link';
  import Head from 'next/head';
  import MyDocument from '@/pages/_document';


  const images = [
    '/V-images/a.jpg',
    '/V-images/b.jpg',
    '/V-images/c.jpg'
  ];

  export default function Home() {
    const [currentImage, setCurrentImage] = useState(images[0]);

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

    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gray-100">
      {/* Combined Banner and Introduction Section */}
        <header className="w-full text-white py-6" style={{ backgroundImage: `url(${currentImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '120vh'}}>
          <div className="container flex bg-opacity-50 bg-blue-900 p-1" style={{ maxWidth: '800px', width: '32%' }}>
          <Image src="/V-images/F.jpg" alt="Logo" width={60} height={50} className="mr-2 ml-1" />
            <h1 className="text-5xl font-bold mt-2">VERTRAUEN</h1>
          
          </div>
        </header>
        <div className="mt-8 bg-opacity-50 bg-gray-800 p-6 rounded-lg">
              <h2 className="text-4xl text-center font-semibold mb-4 text-white">Welcome to Our Think Tank</h2>
              <p className="text-gray-300 text-center text-lg">
              We are a collective of inventive and imaginative African minds united by the singular goal of tackling the most significant challenges in education.
                Our mission is to tackle the pressing challenges of Job readiness skills and Gender biases in education, creating a brighter future for our community in Rwanda.
              </p>
            </div>

        {/* Features Section */}
        <section className="container mx-auto py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        <Link href="/about">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">About Us</h3>
            <p className="text-gray-700">Who we are, our values that drive us, where we come from and Our Mission</p>
          </div>
          </Link>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Meet the Team</h3>
            <p className="text-gray-700">Meet our team of experts who are at the forefront of their respective fields.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Projects</h3>
            <p className="text-gray-700">See our various completed projects.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Photo Gallery</h3>
            <p className="text-gray-700">Check out our Photo Gallery.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container mx-auto py-16 text-center">
          <a
            href="https://example.com/contact"
            className="inline-block bg-blue-900 text-white text-lg font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Get in Touch
          </a>
        </section>

        {/* Footer */}
        <footer className="w-full bg-blue-900 text-white py-4">
          <div className="container mx-auto text-center">
            <p className="text-sm">&copy; 2024 Think Tank Team. All rights reserved.</p>
          </div>
        </footer>
      </main>
    );
  }
