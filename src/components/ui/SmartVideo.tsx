'use client';

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster?: string;
};

export function SmartVideo({ src, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // si autoplay bloqué, on ignore silencieusement
          });
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.6, // déclenche quand 60% visible
      }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      playsInline
      preload="metadata"
      controls
      style={{
        width: "100%",
        height: "100%",
        objectFit: "contain",
        backgroundColor: "#000",
        borderRadius: "12px",
      }}
      onMouseEnter={() => ref.current?.play()}
      onMouseLeave={() => ref.current?.pause()}
    />
  );
}