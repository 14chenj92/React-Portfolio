import React from 'react';
import Fitness from '../../images/fitness.jpg'
import Animal from '../../images/animal.png'
import Workday from '../../images/workday.png'
import Weather from '../../images/weather.jpg'
import Laptop from '../../images/laptop.jpg'
import Planet from '../../images/planet.jpg'
import Comp from '../../images/comp.jpg'
import '../styles/Project.css';

export default function Project() {
  return (
    <div>
      <h1 class="projectTitle fasthidden">Projects</h1>
      <div class="container hidden">
        <div class="row justify-content-evenly">
        <p class="card col-md-3">
                <h1>Fitness App</h1>
                <div class="imgs">
                <img class="image-main imgicon" src= {Fitness}/>
                </div>
                <div class="projectbtns d-flex justify-content-evenly">
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://jhdk707.github.io/Fitness5000/">Application</a> 
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://github.com/jhdk707/Fitness5000">Github</a>  
                </div>
            </p>
            <p class="card col-md-3">
                <h1>Animal Blog</h1>
                <div class="imgs">
                <img class="image-main imgicon" src= {Animal}/>
                </div>
                <div class="projectbtns d-flex justify-content-evenly">
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://polar-temple-53244.herokuapp.com/login">Application</a> 
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://github.com/maxr-e/group-6-not-null">Github</a>  
                </div>
            </p>
            <p class="card col-md-3">
                <h1>Workday Planner</h1>
                <div class="imgs">
                <img class="image-main imgicon" src= {Workday}/>
                </div>
                <div class="projectbtns d-flex justify-content-evenly">
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://14chenj92.github.io/Workday-Planner/">Application</a> 
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://github.com/14chenj92/Workday-Planner">Github</a>  
                </div>
            </p>
            <p class="card col-md-3">
                <h1>Coding Quiz</h1>
                <div class="imgs">
                <img class="image-main imgicon" src= {Comp}/>
                </div>
                <div class="projectbtns d-flex justify-content-evenly">
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://14chenj92.github.io/Coding-Quiz/">Application</a> 
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://github.com/14chenj92/Coding-Quiz">Github</a>  
                </div>
            </p>
            <p class="card col-md-3">
                <h1>Weather Dashboard</h1>
                <div class="imgs">
                <img class="image-main imgicon" src= {Weather}/>
                </div>
                <div class="projectbtns d-flex justify-content-evenly">
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://14chenj92.github.io/Weather-Dashboard/">Application</a> 
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://github.com/14chenj92/Weather-Dashboard">Github</a>  
                </div>
            </p>
            <p class="card col-md-3">
                <h1>StarGazers</h1>
                <div class="imgs">
                <img class="image-main imgicon" src= {Planet}/>
                </div>
                <div class="projectbtns d-flex justify-content-evenly">
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://ancient-ravine-85592.herokuapp.com/">Application</a> 
                <a type="button" class="btnstyle col-md-5" target="blank" href="https://github.com/maxr-e/star-grazers">Github</a>  
                </div>
            </p>
    </div>
    </div>
    </div>
  );
}
