import React from 'react';
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

import Root from './root';

import './index.css';

const router = createHashRouter([{ path: '*', Component: Root }]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
