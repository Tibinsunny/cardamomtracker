import React from 'react';
import "../styles/about.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function About() {
return (
<div className='about-page'>
<div className="container">
<div className="title">
<u> About</u>   
</div>
<div className='title-content'>
This website is an attempt to closely study the change in the indian spices market.<br></br>
Since a direct backend api was not avilable for their official site. I made an API system which automatically
updates the latest price when ever there is a change
<br></br><a style={{ textDecoration: 'none' , color:"grey"  }} href="https://indianspices-api.herokuapp.com">indianspices-api.herokuapp.com</a>
<br></br>
All datas are collected from Indian Spices Board's official Website with the help of `indianspices-api.herokuapp.com`
<br></br>
Feel free to make a Pull Request <a style={{ textDecoration: 'none' , color:"grey"  }} href="https://github.com/Tibinsunny/cardomompricemonitor">here</a> or If you find a bug report it to use via
<a style={{ textDecoration: 'none' , color:"grey"  }} href="https://github.com/Tibinsunny/cardomompricemonitor/issues"> Issue Tracker</a> 

</div>
</div>

</div>
)
}

export default About;
