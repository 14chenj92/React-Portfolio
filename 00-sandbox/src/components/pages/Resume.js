import React from 'react';
import Resume from '../../images/dummy.pdf';
import '../styles/Resume.css';

export default function Home() {
  return (
    <div>
      <h1 class="resumeTitle">Resume</h1>
      <h2 class="downloadText">
      Download my <a target="blank" href={Resume}>Resume</a>
      </h2>
      <br></br>
      <p class="techlist">Technologies Used:</p>
      <h2 class="float"><span>Front-End Proficiencies:</span>
      <li class="tech1">HTML</li>
      <li class="tech1">CSS</li>
      <li class="tech1">JavaScript</li>
      <li class="tech1">jQuery</li>
      <li class="tech1">React</li>
      <li class="tech1">Bootstrap</li>
      <li class="tech1">Bulma</li>
      </h2>
      <h2 class="float"><span>Back-End Proficiencies:</span>
      <li class="tech1">APIs</li>
      <li class="tech1">Node</li>      
      <li class="tech1">Express</li>
      <li class="tech1">mySQL, Sequelize</li>
      <li class="tech1">MongoDB, Mongoose</li>
      <li class="tech1">REST</li>
      <li class="tech1">GraphQL</li>
      </h2>
    </div>
  );
}
