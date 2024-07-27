"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoControls from "./VideoControls";

interface VideoSectionProps {
  videoSrc: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function VideoSection({
  videoSrc,
  title,
  description,
  children,
}: VideoSectionProps) {
  const sectionRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.2, 1, 1, 0.2]
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.section
      ref={sectionRef}
      className="relative h-screen w-screen flex flex-col items-center justify-center p-8 snap-start"
      style={{ opacity, scale }}
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoSrc}
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50" />
      <motion.div
        className="relative z-20 text-center"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-6xl font-serif mb-4 text-sand">{title}</h2>
        <p className="text-2xl text-sand mb-8">{description}</p>
        {children}
      </motion.div>
      <VideoControls videoRef={videoRef} />
    </motion.section>
  );
}
