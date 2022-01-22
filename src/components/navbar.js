import React from 'react';
import '../styles/nav.css'
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome//free-brands-svg-icons'
import About from './about';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Navbar() {
  
  return(

    <div className='navigator'>
      <div className='logo'>
  
       <Link  style={{ textDecoration: 'none' , color:"white"  }} to="/">CardamomPriceTracker</Link>
      </div>
      <div class="github-icon">
      <a  style={{ textDecoration: 'none' , color:"white"  }}  href="https://github.com/Tibinsunny/cardomompricemonitor"><FontAwesomeIcon icon={faGithub} /></a>  
      </div>
      <div className="menu">
        <div className='about-1'>
        <Button  variant="outlined" > <Link className="aboutSection" to="/about">About </Link></Button>
        </div>
      <div className='contact-1'>
      <Button  variant="outlined"><Link className="contactSection" to="/contact">Contact</Link> </Button>
      </div>
      </div>
   
    </div>
   
  )

  
}

export default Navbar;
