import { useEffect, useRef, useState } from 'react';

import Logo from '@/components/Logo';

import video1 from '@/assets/videos/ventilation_1.mp4';
import video2 from '@/assets/videos/ventilation_2.mp4';
import video3 from '@/assets/videos/ventilation_3.mp4';

import * as S from './HomeContent.styles';

const HomeContent: React.FC = () => {
  const [index, setIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videos = [video1, video2, video3];

  const handleVideoEnd = () => {
    setIndex((idx) => (idx !== 2 ? idx + 1 : 0));
  };

  // useEffect(() => {
  //   if (videoRef.current) {
  //     videoRef.current.play();
  //   }
  // }, [index]);

  useEffect(() => {
    const playVideo = () => {
      if (document.visibilityState === 'visible' && videoRef.current) {
        videoRef.current.play().catch((error) => {
          console.error('Video play failed:', error);
        });
      }
    };

    document.addEventListener('visibilitychange', playVideo);

    if (videoRef.current) {
      playVideo();
    }

    return () => {
      document.removeEventListener('visibilitychange', playVideo);
    };
  }, [index]);

  return (
    <S.Wrapper>
      {videos.map((video, idx) => (
        <S.Video
          isActive={index === idx}
          autoPlay={idx === index}
          muted
          onEnded={handleVideoEnd}
          key={idx}
          ref={idx === index ? videoRef : null}
          playsInline
        >
          <source src={video} type="video/mp4" />
        </S.Video>
      ))}
      <Logo />
      <S.Overlay />
    </S.Wrapper>
  );
};

export default HomeContent;
