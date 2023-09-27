import logo from './logo.svg';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import About from './components/About/About';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

import './App.css';
import DiaryVault from './components/PrivacyPolicy/DiaryVault';
import OauthRedirect from './components/Redirect/OauthRedirect';

function App() {
  const [currentTheme, setCurrentTheme] = useState('blue.css');

  return (
    <>
      <Helmet>
        <link
          id='theme-style'
          rel='stylesheet'
          href={`/themes/${currentTheme}`}
        />
      </Helmet>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={
            <div style={{ marginTop: 'var(--nav-height)' }}>
              <Intro changeTheme={(theme) => setCurrentTheme(theme)} />
              <About changeTheme={(theme) => setCurrentTheme(theme)} />
              <Project changeTheme={(theme) => setCurrentTheme(theme)} />
              <Contact changeTheme={(theme) => setCurrentTheme(theme)} />
            </div>
          }
        />
        <Route path='/privacy-policies/dairyaholic' element={<DiaryVault />} />
        <Route path='/oauth2redirect' element={<OauthRedirect />} />
      </Routes>
    </>
  );
}

export default App;
