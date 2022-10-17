import React from 'react';
import ReactDOM from 'react-dom/client';
import AppF from './Components/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppF isShowed={true} type="text" className="buttonNotShow" />
  </React.StrictMode>
);
