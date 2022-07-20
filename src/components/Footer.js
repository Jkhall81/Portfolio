import "./FooterStyles.css";

import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight: "2rem" }} />
                    <div>
                        <p>2532 W. Peoria Ave</p>
                        <p>Phoenix, AZ 85029</p>
                    </div>
                </div>
                <div className="phone">
                <h4><FaPhone size={20} style={{color:"#fff", marginRight: "2rem" }} />
                (623) 206-2944</h4>
                </div>
                <div className="email">
                <h4><FaMailBulk size={20} style={{color:"#fff", marginRight: "2rem" }} />
                jason.kei.hall@gmail.com</h4>
                </div>
            </div>

            <div className="right">
                <h4>About Me</h4>
                <p>My name is Jason Hall.  I am a freelance, self taught web developer.  I am currently working towards becoming a fullstack developer.</p>
                <div className="social">
                    <a href="https://www.facebook.com/profile.php?id=100081060077918">
                    <FaFacebook size={30} style={{ color: "#fff",marginRight: "1rem" }} />
                    </a>
                    <FaTwitter size={30} style={{ color: "#fff",marginRight: "1rem" }} />
                    <a href="www.linkedin.com/in/jason-hall-650964242">
                    <FaLinkedin size={30} style={{ color: "#fff",marginRight: "1rem" }} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
