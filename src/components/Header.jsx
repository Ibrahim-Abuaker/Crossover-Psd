import React from "react";
import { useState } from "react";
import "./part1.css";

function Header() {
   const [isOverlayVisible, setOverlayVisible] = useState(false);

   const handleMouseOver = () => {
     setOverlayVisible(true);
   };

  const handleMouseOut = () => {
  
       setOverlayVisible(false);

    
   };
  return (
    <div id="b1">
      <div className="b1">
        <div className="b1left">
          <img
            src="https://assets-global.website-files.com/6586e5fc525ee55fa1623142/65bf8d010e977630d336bf96_minifolio.svg"
            alt="img"
          />
        </div>
        <div className="b1right">
          <nav>
            <ul className="firstUl">
              <li>
                <a id="navhome" href="#">
                  Home
                </a>
              </li>
              <li>
                <a href="#footer">About Us</a>
              </li>
              <li
                className="relative"
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              >
                <a href="#b4">Pages {">"} </a>
                <div
                  className="dropdown"
                  id="overlay"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                  style={{ display: isOverlayVisible ? "block" : "none" }}
                >
                  <ul className="secondUl">
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#footer">Projects</a>
                    </li>
                    <li>
                      <a href="#footer">About Us</a>
                    </li>
                    <li>
                      <a href="#footer">Blog</a>
                    </li>
                    <li>
                      <a href="#footer">Style</a>
                    </li>
                    <li>
                      <a href="#footer">Contact Us</a>
                    </li>
                    <li>
                      <a href="#footer" id="more">
                        More Templates
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#b5">Contact Us</a>
              </li>
              <li>
                <a href="#b4">
                  <span id="getstarted">Get started</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="line"></div>
      <div className="b1titel-div">
        <h1 className="h1titel">
          Crafting digital excellence your unique identity
        </h1>
        <div className="imageRow1">
          <img src="/pic-lef-1.jpg" alt="image" className="picLeft1" />
         
            <span id="getstarted"> where ?</span>
          
          <img src="/pic-lef-2.jpg" alt="image2" className="picRight1" />
          
        </div>
        <div className="under">
          <h3>Know where that one idea will take.</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
