import { useEffect, useRef, useState } from 'react';
import video1 from '../../../../assets/videos/ventilation_1.mp4';
import video2 from '../../../../assets/videos/ventilation_2.mp4';
import video3 from '../../../../assets/videos/ventilation_3.mp4';

import * as S from './HomeContent.styles';

const HomeContent: React.FC = () => {
  const [index, setIndex] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videos = [video1, video2, video3];

  const handleVideoEnd = () => {
    setIndex((idx) => (idx !== 2 ? idx + 1 : 0));
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [index]);

  return (
    <S.Wrapper>
      {videos.map((video, idx) => (
        <S.Video isActive={index === idx} autoPlay={idx === index} muted onEnded={handleVideoEnd} key={idx} ref={idx === index ? videoRef : null}>
          <source src={video} type="video/mp4" />
        </S.Video>
      ))}
      <S.Content>
        <S.Title variant="h1" color="primary">
          VenturalVision
        </S.Title>
        <S.Subtitle variant="h2" color="secondary">
          Your HVAC Calculation Hub
        </S.Subtitle>
      </S.Content>
      <S.Overlay />
    </S.Wrapper>
  );
};

export default HomeContent;
