import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import 'tailwindcss/tailwind.css';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';

// Function to get YouTube embed URL from video URL
const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    return ampersandPosition !== -1
        ? `https://www.youtube.com/embed/${videoId.substring(0, ampersandPosition)}`
        : `https://www.youtube.com/embed/${videoId}`;
};

// Function to get Vimeo embed URL from video URL
const getVimeoEmbedUrl = (url: string) => {
    const videoId = url.split('/').pop();
    return `https://player.vimeo.com/video/${videoId}`;
};


const projects = [
    {
        title: 'E-Lab Challenge 1',
        description: 'We are Vertrauen!',
        videoSrc: 'https://www.youtube.com/watch?v=vMBxjTifXjA',
    },
    {
        title: 'E-Lab Challenge 2',
        description: 'Discover Africa: Welcome to Westpoint!',
        videoSrc: 'https://www.youtube.com/watch?v=pT9K-GvlqRA&t=26s',
    },
    {
        title: 'E-Lab Challenge 3',
        description: 'Help Lab',
        videoSrc: 'https://www.youtube.com/watch?v=b1BgtZAOEo4',
    },
    {
        title: 'E-Lab Challenge 4',
        description: 'Hunt for Treasure!',
        videoSrc: 'https://www.youtube.com/watch?v=fessxVr_6BY',
    },
    {
        title: 'E-Lab Challenge 5',
        description: 'Launching Your Mission',
        videoSrc: 'https://www.youtube.com/watch?v=8L5dbDBCrkY&t=14s',
    },
    {
        title: 'E-Lab Challenge 6',
        description: 'Your Digital Print',
        videoSrc: 'https://youtu.be/ehOQ3uYXc24?si=GZORB_PzSprSZSIp',
    },
];

const Project = () => {
    const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
    return (
        <main className="min-h-screen bg-gray-100 p-6 sm:p-8 flex flex-col items-center font-sans">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <title>Vertrauen Projects</title>
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
                <Link href="/team" passHref legacyBehavior>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">The Team</a>
                </Link>
                <Link href="/gallery"passHref legacyBehavior>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Gallery</a>
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com/vertrauen_._?igsh=d25hejJjcnJpZWFk"passHref legacyBehavior>
                  <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
                  target="_blank" rel="noopener noreferrer">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
            <section className="py-8 mt-10">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">Our Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Link href={project.videoSrc} key={index} legacyBehavior passHref>
                            <a className="flex flex-col items-center border border-gray-300 rounded-lg p-4 hover:bg-gray-50" target="_blank" rel="noopener noreferrer">
                                <div className="aspect-w-16 aspect-h-9 w-full mb-4">
                                    {project.videoSrc.includes('youtube.com') && (
                                        <iframe
                                            src={getYouTubeEmbedUrl(project.videoSrc)}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full rounded-lg"
                                        ></iframe>
                                    )}
                                    {project.videoSrc.includes('vimeo.com') && (
                                        <iframe
                                            src={getVimeoEmbedUrl(project.videoSrc)}
                                            frameBorder="0"
                                            allow="autoplay; fullscreen; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full rounded-lg"
                                        ></iframe>
                                    )}
                                </div>
                                <h3 className="text-lg font-semibold">{project.title}</h3>
                                <p className="text-sm text-gray-600">{project.description}</p>
                            </a>
                        </Link>
                    ))}
                </div>


            </section>

            <footer className="bg-blue-900 text-white py-2 w-full text-center rounded-2xl pt-5 pb-5 h-15 mt-10">
                <div>
                    <p>&copy; 2024 Vertrauen. All rights reserved.</p>
                    <p className='tflex text-[10px] text-right items-end pr-4'>created by <a href="https://www.linkedin.com/in/ebitech14/" className="text-blue-300 ">ebitech</a></p>
                </div>
            </footer>

        </main>
    );
};
export default Project;
