
import { useEffect, useRef } from "react";
import sakura from "../assets/sakura.mp3";

const AudioManager = ({ isPlaying }) => {
  const audioRef = useRef(new Audio(sakura));

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    return () => {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    };
  }, [isPlaying]);

  return null;
};

export default AudioManager;
