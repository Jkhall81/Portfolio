import "./AboutContentStyles.css";

import React from 'react'
import { Link } from "react-router-dom";
import React1 from "../assets/React1.jpeg";
import Bootstrap5 from "../assets/Bootstrap5.png";

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p>My name is Jason Hall.  I am a freelance, React, front-end developer.  I create responsive, secure websites.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="react"/>
                </div>
                <div className="img-stack bottom">
                    <img src={Bootstrap5} className="img" alt="bootstrap"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent