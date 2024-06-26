import { Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

import { HOME, ABOUT, VENTILATION_CALCULATOR } from './constants/path';

import { AnimatePresence } from 'framer-motion';
import './utils/languages/i18n';

import HomePage from './pages/HomePage';
import About from './pages/About';
import VentilationCalculatorPage from './pages/VentilationCalculatorPage';

import * as S from './App.styles';

function App() {
  const location = useLocation();
  return (
    <S.App>
      <Suspense>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path={HOME} element={<HomePage />} />
            <Route path={ABOUT} element={<About />} />
            <Route path={VENTILATION_CALCULATOR} element={<VentilationCalculatorPage />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </S.App>
  );
}

export default App;
