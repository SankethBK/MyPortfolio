import React from 'react';
import myData from '../../data.json';
import './About.css';

function About() {
  return (
    <div id='about' className='about-wrapper color-transition'>
      <h1 className='about-header'>About Me</h1>

      <div className='about-grid'>
        <div className='about-section-1'>
          <ul className='about-data-list'>
            <li>Name: {myData['details-list']['Name']}</li>
            <li>Email: {myData['details-list']['Email']}</li>
            <li>Degree: {myData['details-list']['Degree']}</li>
            <li>University: {myData['details-list']['University']}</li>
            <li>Nationality: {myData['details-list']['Nationality']}</li>
          </ul>
          <div className='my-resume'>
            <a href='#'>Download My Resume</a>
          </div>
        </div>

        <div className='about-section-2'>
          <div className='details-text'>
            <div id='corner-tl' className='corner'></div>
            <div id='corner-tr' className='corner'></div>

            <p>{myData['about-me-text']}</p>

            <p id='github-link'>
              <a href='https://github.com/SankethBK' target='_blank'>
                Visit my Github profile
              </a>
            </p>

            <div id='corner-br' className='corner'></div>
            <div id='corner-bl' className='corner'></div>
          </div>
        </div>
      </div>

      <div id='skills'>
        <h3>Skills</h3>

        <div className='skills-grid'>
          <div className='skills-section-1'>
            <div className='skills-box'>
              <h3 className='skills-text'>
                I have decent amount of experience in these tools and
                technologies
              </h3>
              <ul className='skills-list'>
                {myData['experienced-skills'].map((item, index) => {
                  return (
                    <li key={index} className='skill-item'>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className='skills-box'>
              <h3 className='skills-text'>
                I am familiar with these tools and technologies
              </h3>
              <ul className='skills-list'>
                {myData['familiar-skills'].map((item, index) => {
                  return (
                    <li key={index} className='skill-item'>
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className='skills-section-2'>
            <div className='skills-text'>
              <div id='corner-tl' className='corner'></div>
              <div id='corner-tr' className='corner'></div>

              <p>{myData['skills-text']}</p>

              <div id='corner-br' className='corner'></div>
              <div id='corner-bl' className='corner'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
