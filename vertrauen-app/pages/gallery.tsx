import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import { MdMenu } from 'react-icons/md';
import Modal from 'react-modal';

const Gallery = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState({ src: '', alt: '' });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openModal = (image: React.SetStateAction<{ src: string; alt: string; }>) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const images = [
    { src: '/V-images/a.jpg', alt: 'First Team Photo 😃' },
    { src: '/V-images/ele2.jpg', alt: 'Team Photo' },
    { src: '/V-images/c.jpg', alt: 'Team Photo' },
    { src: '/V-images/ebi4.jpg', alt: 'Ebitech' },
    { src: '/V-images/f.jpg', alt: 'Team Logo' },
    { src: '/V-images/gaby.jpg', alt: 'Gaby a.k.a "The Nutritionist' },
    { src: '/V-images/promise.jpg', alt: 'The Chef' },
    { src: '/V-images/ele.jpg', alt: 'Promise X Gaby X Nancy' },
    { src: '/V-images/divine.jpg', alt: 'Ebitech' },
    { src: '/V-images/moses.jpg', alt: 'The Sermon' },
    { src: '/V-images/nancy.jpg', alt: 'Nancy a.k.a "The Creator"' },
    { src: '/V-images/ketia.jpg', alt: 'Ketia 🌚 a.k.a "Woman of God"' },
    { src: '/V-images/queen.jpg', alt: 'Christabella a.k.a "Queen of Rwanda"' },
    { src: '/V-images/np.jpg', alt: 'Nancy X Promise' },
    { src: '/V-images/P&D.jpg', alt: 'The Chef X Ebitech' },
    { src: '/V-images/Teamphoto.jpg', alt: 'Team Photo' },
    { src: '/V-images/Teamphoto2.jpg', alt: 'Team Photo' },
    { src: '/V-images/Teamphoto3.jpg', alt: 'Team Photo' },
    { src: '/V-images/exm.jpg', alt: 'The Sermon X Ebitech' },
    { src: '/V-images/team.jpg', alt: 'Team Photo' },
    { src: '/V-images/qxe.jpg', alt: 'Queen X Ebitech' },
    { src: '/V-images/qnp.jpg', alt: 'Queen X Nancy X Promise' },

    
    // Add more images as needed
  ];

  return (
    <main className="min-h-screen bg-gray-100 p-6 sm:p-8 flex flex-col items-center font-sans">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Vertrauen Gallery</title>
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
                </li>
                <li>
                  <Link href="/project" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200">Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://www.instagram.com/vertrauen_._?igsh=d25hejJjcnJpZWFk" passHref legacyBehavior>
                    <a className="block px-4 py-2 text-gray-800 hover:bg-gray-200" target="_blank" rel="noopener noreferrer">
                      Contact Us
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>

      <section className="py-8 mt-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-900">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-300 rounded-lg p-1 hover:bg-gray-50 cursor-pointer"
              onClick={() => openModal(image)}
            >
              <Image src={image.src} alt={image.alt} width={300} height={200} className="rounded-lg mb-4" />
              <p className="text-sm text-gray-600">{image.alt}</p>
            </div>
          ))}
        </div>
      </section>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="flex justify-center items-center h-full"
        overlayClassName="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center"
      >
        <div className="relative">
          <button onClick={closeModal} className="absolute top-0 right-0 m-4 text-white text-2xl">&times;</button>
          <Image src={selectedImage.src} alt={selectedImage.alt} width={800} height={600} className="rounded-lg" />
        </div>
      </Modal>

      <footer className="bg-blue-900 text-white py-2 w-full text-center rounded-2xl pt-5 pb-5 h-15 mt-10">
        <div>
          <p>&copy; 2024 Vertrauen. All rights reserved.</p>
          <p className='tflex text-[10px] text-right items-end pr-4'>created by <a href="https://www.linkedin.com/in/ebitech14/" className="text-blue-300 ">ebitech</a></p>
        </div>
      </footer>
    </main>
  );
};

export default Gallery;
