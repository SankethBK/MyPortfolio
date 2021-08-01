import React from 'react';
import red_ts from '../../images/taylor_swift_red.jpeg';
import myData from '../data.json';
import './Intro.css';

function Intro() {
  return (
    <div className='main-container'>
      <div className='greeting-wrapper'>
        <h1>Hi i am {myData.greeting_name}</h1>
      </div>
      <div className='intro-wrapper'>
        <div className='nav-wrapper'>
          <div className='dots-wrapper'>
            <div id='dot-1' className='browser-dot'></div>
            <div id='dot-2' className='browser-dot'></div>
            <div id='dot-3' className='browser-dot'></div>
          </div>
        </div>

        <div className='left-column'>
          <img src={red_ts} id='profile_pic' />

          <h4 className='theme-header'>Choose theme</h4>
          <div id='theme-options-wrapper'>
            <div data-mode='light' id='light-mode' className='theme-dot'></div>
            <div data-mode='blue' id='blue-mode' className='theme-dot'></div>
            <div data-mode='green' id='green-mode' className='theme-dot'></div>
            <div
              data-mode='purple'
              id='purple-mode'
              className='theme-dot'
            ></div>
          </div>
        </div>

        <div className='right-column'>
          <div className='preview-wrapper'>
            <div id='preview'>
              <h3>What I Do</h3>

              <div id='corner-tl' className='corner'></div>
              <div id='corner-tr' className='corner'></div>

              <p>{myData.whatIDo}</p>

              <div id='corner-br' className='corner'></div>
              <div id='corner-bl' className='corner'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
