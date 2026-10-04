import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.jsx';
import './index.css';
import { siteConfig } from './config/site.js';

// Import fonts
import '@fontsource/anton';
import '@fontsource/space-grotesk';

// Inject config variables into root
const root = document.documentElement;
root.style.setProperty('--accent', siteConfig.colors.accent);
root.style.setProperty('--background', siteConfig.colors.background);
root.style.setProperty('--foreground', siteConfig.colors.foreground);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
);
