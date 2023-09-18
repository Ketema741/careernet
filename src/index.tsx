import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import IntershipState from './context/internship/InternshipState';
import BlogState from './context/blog/BlogState';
import { ContextProvider } from './context/ContextProvider';
import AuthState from './context/Auth/AuthState';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <AuthState>
    <BlogState>
      <IntershipState>
        <ContextProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ContextProvider>
      </IntershipState>
    </BlogState>
  </AuthState>
);

