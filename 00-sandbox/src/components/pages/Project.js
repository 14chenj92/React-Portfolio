import React from 'react';
import Fitness from '../../images/fitness.jpg'
import Animal from '../../images/animal.png'
import Workday from '../../images/workday.png'
import Weather from '../../images/weather.jpg'
import Laptop from '../../images/laptop.jpg'
import '../styles/Project.css';

export default function Project() {
  return (
    <div>
      <h1 class="projectTitle">Projects</h1>
        <ul class="row justify-content-evenly">
            <p class="card col-md-3">
                <h1>Fitness App Project</h1>
                <a class="imgs" target="blank" href="https://jhdk707.github.io/Fitness5000/">
                <img src= {Fitness} class="imgicon"/></a>  
            </p>
            <p class="card col-md-3">
                <h1>Animal Blog</h1>
                <a class="imgs" target="blank" href="https://polar-temple-53244.herokuapp.com/login">
                <img src= {Animal} class="imgicon"/></a>  
            </p>
            <p class="card col-md-3">
                <h1>Workday Planner</h1>
                <a class="imgs" target="blank" href="https://14chenj92.github.io/Workday-Planner/">
                <img src= {Workday} class="imgicon"/></a>  
            </p>
            <p class="card col-md-3">
                <h1>Social-Network API</h1>
                <a class="imgs" target="blank" href="https://14chenj92.github.io/Workday-Planner/">
                <img src= {Laptop} class="imgicon"/></a>  
            </p>
            <p class="card col-md-3">
                <h1>Weather Dashboard</h1>
                <a class="imgs" target="blank" href="https://14chenj92.github.io/Weather-Dashboard/">
                <img src= {Weather} class="imgicon"/></a>  
            </p>
            <p class="card col-md-3">
                <h1>Tech Blog</h1>
                <a class="imgs" target="blank" href="https://14chenj92.github.io/Workday-Planner/">
                <img src= {Workday} class="imgicon"/></a>  
            </p>
        </ul>
    </div>
  );
}
