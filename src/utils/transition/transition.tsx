import { ComponentType } from 'react';

import Logo from '../../components/Logo';

import * as S from './transition.styles';

const transition = (OgComponent: ComponentType) => {
  return () => (
    <>
      <OgComponent />
      <S.SlideIn initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
        <Logo />
      </S.SlideIn>
      <S.SlideOut initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}>
        <Logo />
      </S.SlideOut>
    </>
  );
};

export default transition;
