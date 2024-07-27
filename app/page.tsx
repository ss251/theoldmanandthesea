"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SupportModal from "@/components/SupportModal";
import Header from "@/components/Header";
import Image from "next/image";
import VideoControls from "@/components/VideoControls";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedImage, setExpandedImage] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const videoRef3 = useRef<HTMLVideoElement>(null);

  const CreditLine = () => (
    <p className="text-xs sm:text-sm text-sand opacity-70 absolute bottom-1 sm:bottom-4 left-1 sm:left-4 z-20 max-w-[200px] sm:max-w-none">
      built with{" "}
      <Heart
        className="inline-block w-3 h-3 sm:w-4 sm:h-4 text-coral"
        fill="currentColor"
      />{" "}
      by{" "}
      <Link
        href="https://twitter.com/thescoho"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-coral hover:text-sand transition-colors duration-300"
      >
        thescoho
      </Link>
    </p>
  );

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-ocean-blue">
      <Header />

      <AnimatePresence>
        <section id="intro" className="relative h-screen">
          <video
            ref={videoRef1}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/intro.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            <div>
              <h1 className="text-7xl font-bold mb-6 text-sand">
                Ibraheem Leone
              </h1>
              <p className="text-3xl text-sand">
                Sierra Leonean-American Multi-Disciplinary Artist
              </p>
            </div>
          </motion.div>
          <VideoControls videoRef={videoRef1} />
        </section>

        <section id="piece" className="relative h-screen">
          <video
            ref={videoRef2}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/piece.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            <div className="text-center max-w-3xl px-4 space-y-8">
              <h2 className="text-5xl md:text-6xl font-bold text-sand">
                The Piece
              </h2>
              <motion.div
                className={`relative w-64 h-64 mx-auto cursor-pointer`}
                onClick={() => setExpandedImage(!expandedImage)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                layout
              >
                <Image
                  src="/watch.png"
                  alt="The Piece"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-2xl"
                />
              </motion.div>
              <p className="text-lg md:text-xl text-sand">
                A cc0 art drop that generates passive income for an elderly
                fisherman in Sierra Leone.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-2">
                  <span className="text-sand text-base md:text-lg">
                    Sponsored by
                  </span>
                  <Link
                    href="https://artistprogram.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/artist-program-logo.png"
                      alt="Artist Program"
                      width={20}
                      height={20}
                      objectFit="contain"
                    />
                    <span className="ml-1 text-coral text-base md:text-lg">
                      Artist Program
                    </span>
                  </Link>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sand text-base md:text-lg">
                    Built on
                  </span>
                  <Link
                    href="https://www.base.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:opacity-80 transition-opacity"
                  >
                    <Image
                      src="/base-logo.png"
                      alt="Base"
                      width={24}
                      height={24}
                      objectFit="contain"
                    />
                    <span className="ml-1 text-coral text-base md:text-lg">
                      Base
                    </span>
                  </Link>
                </div>
              </div>
              <Button
                onClick={() =>
                  window.open(
                    "https://form.waitlistpanda.com/go/06pHvmZ3Nb7jX6aKXJwM",
                    "_blank"
                  )
                }
                className="bg-coral text-ocean-blue hover:bg-sand hover:text-coral transition-all duration-300 text-lg px-8 py-3 mt-6"
              >
                Join Waitlist
              </Button>
            </div>
          </motion.div>
          <VideoControls videoRef={videoRef2} />
        </section>

        <section id="about" className="relative h-screen">
          <video
            ref={videoRef3}
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/about.mov" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
          >
            <div className="text-center max-w-3xl mx-auto px-6">
              <h2 className="text-6xl font-bold mb-8 text-sand">
                About the Artist
              </h2>
              <p className="text-xl mb-6 text-sand">
                Ibraheem Leone is a Sierra Leonean-American multi-disciplinary
                artist who works with visual and martial arts, poetry,
                documentary filmmaking, and blockchain technology to tell and
                preserve stories.
              </p>
              <p className="text-xl mb-6 text-sand">
                Inspired by art&apos;s capacity to spark important
                conversations, Leone&apos;s work is influenced by his
                observations in post-Arab Spring Egypt. He combines his artistic
                practice with grassroots activism and community organizing in
                the United States.
              </p>
              <p className="text-xl mb-6 text-sand">
                Leone is currently developing &quot;The Tapestry,&quot; a
                virtual home for preserving and weaving together oral histories
                around the world, exploring the potential of blockchain
                technology for storytelling and cultural preservation.
              </p>
              <div className="flex justify-center space-x-6 mt-8">
                <Link
                  href="https://mobile.twitter.com/ibraheemleone"
                  target="_blank"
                  className="text-sand hover:text-coral"
                >
                  <FaTwitter size={24} />
                </Link>
                <Link
                  href="https://www.instagram.com/ibraheemleone/"
                  target="_blank"
                  className="text-sand hover:text-coral"
                >
                  <FaInstagram size={24} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ibraheem-bangura-119083103/"
                  target="_blank"
                  className="text-sand hover:text-coral"
                >
                  <FaLinkedin size={24} />
                </Link>
                {/* <Link
                  href="https://github.com/ss251"
                  target="_blank"
                  className="text-sand hover:text-coral"
                  
                >
                  <FaGithub size={24} />
                </Link> */}
              </div>
            </div>
          </motion.div>
          <VideoControls videoRef={videoRef3} />
          {/* <CreditLine /> */}
        </section>
      </AnimatePresence>

      <SupportModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </main>
  );
}
