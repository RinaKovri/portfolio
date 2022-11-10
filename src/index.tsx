import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.module.scss';
import Navbar from './components/navbar/navbar';
import AboutMe from './components/aboutMe/aboutMe';
import Footer from './components/footer/footer';
import Cv from './components/sites/cv';
import Projects from './components/sites/projects';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='.' element={<App />}></Route>
        <Route path='aboutMe' element={<AboutMe />}></Route>
        <Route path='cv' element={<Cv />} />
        <Route path='projects' element={<Projects />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
