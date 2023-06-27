import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.scss';
import App from "./Navbar/Navbar";
import Section1 from "./Section1/Section1";
import Section2 from "./Section2/Section2";
import Section3 from "./Section3/Section3";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Section1/>
    <Section2/>
    <Section3/>
  </React.StrictMode>
);