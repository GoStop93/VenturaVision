import { Suspense } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';

import { AnimatePresence } from 'framer-motion';

import './utils/languages/i18n';

import { ABOUT, ERROR, HOME, VENTILATION_CALCULATOR } from './constants/path';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage';
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
            <Route path={ERROR} element={<ErrorPage />} />
            <Route path="*" element={<Navigate to="/error/404" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </S.App>
  );
}

export default App;
