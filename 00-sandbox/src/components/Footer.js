import React from 'react';
import Github from '../images/github.svg'
import LinkedIn from '../images/linkedin.svg'
import Stack from '../images/stack.svg'

function Footer() {
    return (
        <div class="footer">
        <a class="footericon" target="blank" href="https://github.com/14chenj92">
        <img src= {Github} class="icon"/></a> 

        <a class="footericon" target="blank" href="https://www.linkedin.com/">
        <img src= {LinkedIn} class="icon"/></a>  
        
        <a class="footericon" target="blank" href="https://stackoverflow.com/users/21831060/jonathan">
        <img src= {Stack} class="icon"/></a>  
        </div> 
  );
  }

  export default Footer;