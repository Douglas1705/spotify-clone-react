import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/specific/Header';
import Section from './components/specific/section';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Section />
  </StrictMode>,
);
