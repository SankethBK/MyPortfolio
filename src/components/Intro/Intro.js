import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import red_ts from '../../images/taylor_swift_red.jpeg';
import sanketh from '../../images/my-picture-2.jpeg';
import myData from '../../data.json';
import './Intro.css';

function Intro() {
  const themes = {
    white: '',
    purple: 'purple.css',
    green: 'green.css',
    blue: 'blue.css',
  };

  const [currentTheme, setCurrentTheme] = useState(themes.blue);

  return (
    <div className='container color-transition'>
      <Helmet>
        <link
          id='theme-style'
          rel='stylesheet'
          href={`/themes/${currentTheme}`}
        />
      </Helmet>
      <div id='home' className='main-container'>
        <div className='greeting-wrapper'>
          <h1>Hi i am {myData['greeting-name']}</h1>
        </div>
        <div className='intro-wrapper color-transition'>
          <div className='nav-wrapper color-transition'>
            <div className='dots-wrapper'>
              <div id='dot-1' className='browser-dot'></div>
              <div id='dot-2' className='browser-dot'></div>
              <div id='dot-3' className='browser-dot'></div>
            </div>
          </div>

          <div className='left-column'>
            <img src={sanketh} id='profile_pic' />

            <h4 className='theme-header'>Choose theme</h4>
            <div id='theme-options-wrapper'>
              <div
                data-mode='light'
                id='light-mode'
                className='theme-dot'
                onClick={() => setCurrentTheme(themes.white)}
              ></div>
              <div
                data-mode='blue'
                id='blue-mode'
                className='theme-dot'
                onClick={() => setCurrentTheme(themes.blue)}
              ></div>
              <div
                data-mode='green'
                id='green-mode'
                className='theme-dot'
                onClick={() => setCurrentTheme(themes.green)}
              ></div>
              <div
                data-mode='purple'
                id='purple-mode'
                className='theme-dot'
                onClick={() => setCurrentTheme(themes.purple)}
              ></div>
            </div>
          </div>

          <div className='right-column'>
            <div className='preview-wrapper'>
              <div id='preview' className='color-transition'>
                <h3>What I do</h3>

                <div id='corner-tl' className='corner'></div>
                <div id='corner-tr' className='corner'></div>

                <p>{myData['what-i-do']}</p>

                <div id='corner-br' className='corner'></div>
                <div id='corner-bl' className='corner'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
