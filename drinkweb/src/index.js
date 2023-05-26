import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LoginContextProvider } from './context/LoginContext';
import CartState from './context/CartState.jsx';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginContextProvider> {/* each context need to be written here */}
      <CartState>
        <App />
      </CartState>
    </LoginContextProvider>
  </React.StrictMode>
);


