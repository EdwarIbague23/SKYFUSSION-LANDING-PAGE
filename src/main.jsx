import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import LoadingScreen from './components/LoadingScreen';
import { ScrollProgress } from './components/ScrollProgress';
import { CustomCursor } from './components/CustomCursor';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Loading screen shown only during initial mount */}
    <LoadingScreen />
    
    <App />
    
    {/* Global effects */}
    <ScrollProgress />
    <CustomCursor />
  </StrictMode>
);