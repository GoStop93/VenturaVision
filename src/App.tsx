import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import HomePage from './Pages/HomePage';

import * as S from './App.styles';

function App() {
  const location = useLocation();
  return (
    <S.App>
      <Suspense>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </S.App>
  );
}

export default App;
