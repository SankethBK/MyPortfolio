import React from 'react';
import './Projects.css';
import myData from '../../data.json';

function Projects() {
  return (
    <div id='projects'>
      <h3 className='projects-header'>Projects</h3>

      <p className='projects-intro-text'>These are some of my projects</p>

      <div className='projects-grid'>
        {myData['projects'].map((project, index) => {
          return (
            <div key={index} className='card'>
              <img src={project.thumbnail} alt={project.name + ' thumbnail'} />
              <div className='info'>
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className='project-links'>
                  {project['demo'] && <a href={project['demo']}>demo</a>}

                  {project['source-code'] && (
                    <a href={project['source-code']}>source code</a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
