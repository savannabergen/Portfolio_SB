import React from 'react';

const Work = () => {
  return (
    <div>
      <h1>Work</h1>
      <div className="work-section">
        <h2>Project Title</h2>
        <p>Description: This is a project description.</p>
        <img src="image-url" alt="Project Image" />
        <p>Link: <a href="project-link">View Project</a></p>
        <h3>Tech List:</h3>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>HTML/CSS</li>
        </ul>
      </div>
    </div>
  );
};

export default Work;