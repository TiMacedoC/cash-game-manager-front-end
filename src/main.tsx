import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SignIn } from './pages/signin';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SignIn />
  </StrictMode>
);
