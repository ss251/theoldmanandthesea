"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoControlsProps {
  videoRef: React.RefObject<HTMLVideoElement>;
}

export default function VideoControls({ videoRef }: VideoControlsProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.muted = isMuted;
      if (isPlaying) {
        videoElement
          .play()
          .catch((error) => console.error("Error playing video:", error));
      } else {
        videoElement.pause();
      }
    }
  }, [isPlaying, isMuted, videoRef]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <motion.div
      className="absolute bottom-4 right-4 z-20 flex space-x-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Button
        variant="outline"
        size="icon"
        onClick={togglePlay}
        className="bg-transparent text-sand hover:bg-sand hover:text-ocean-blue"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4" />
        )}
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleMute}
        className="bg-transparent text-sand hover:bg-sand hover:text-ocean-blue"
      >
        {isMuted ? (
          <VolumeX className="h-4 w-4" />
        ) : (
          <Volume2 className="h-4 w-4" />
        )}
      </Button>
    </motion.div>
  );
}
