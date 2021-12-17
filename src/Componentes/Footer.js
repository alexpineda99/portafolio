import "../Css/index.css";
import React from 'react';
import { SocialIcon } from 'react-social-icons';

function Footer() {
 
  return (
            <div className="footer">

                <div className="footer-item">Maracaibo, Venezuela</div>
                <div className="footer-item">Alexandro Pineda
                <div className="footer-item-socials">
                <SocialIcon url="https://www.instagram.com/mordecalex/?hl=es" style={{ height: 30, width: 30 }} fgColor="#fff" />
                <SocialIcon url="https://twitter.com/mordecalex" style={{ height: 30, width: 30 }} fgColor="#fff" />
                <SocialIcon url="alexandropinedam1310@gmail.com" network="email" style={{ height: 30, width: 30 }} fgColor="#fff" />
                <SocialIcon url="https://t.me/mordecalex" network="telegram" style={{ height: 30, width: 30 }} fgColor="#fff" />
                <SocialIcon url="https://www.linkedin.com/in/alexandro-pineda-m%C3%A1rmol-16a27a154/" style={{ height: 30, width: 30 }} fgColor="#fff" />
                
                </div>
                </div>
                <div className="footer-item">&copy; Copyright 2021 Alexandro Pineda. All Rights Reserved</div>

            </div>
  );
}

export default Footer;