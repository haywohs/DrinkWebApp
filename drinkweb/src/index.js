import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoginContextProvider } from './context/LoginContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider> {/* each context need to be written here */}
      <App />
    </LoginContextProvider>
  </React.StrictMode>
);


