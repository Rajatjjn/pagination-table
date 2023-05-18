import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import Page from "./Page.js"

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}
    <Page/>
  </StrictMode>
);
