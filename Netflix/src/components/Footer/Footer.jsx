import React from "react";
import "./Footer.css";
import Youtube_icon from '../../assets/youtube_icon.png';
import twitter_icon from '../../assets/twitter_icon.png';
import instagram_icon from '../../assets/instagram_icon.png';
import facebook_icon from '../../assets/facebook_icon.png';

const Footer = () => {
  return <div className="footer">
    <div className="footer-icons">
       <img src={Youtube_icon} alt="" />
       <img src={twitter_icon} alt="" />
       <img src={instagram_icon} alt="" />
       <img src={facebook_icon} alt="" />
    </div>

    <ul>

      <li>Auto Description</li>
      <li>Help Centre</li>
      <li>Gift Cards </li>
      <li>Media Centre</li>
      <li>Investor Relation</li>
      <li>Jobs</li>
      <li>Terms of Use</li>
      <li>Privacy</li>
      <li>Legal Notices</li>
      <li>Cookie Preferences</li>
      <li>Contact Us</li>
    
    </ul>
    <p className="copyright-text">
      &copy; 2024 Netflix, Inc. or its affiliates. All rights reserved.
    </p>
  </div>;
};

export default Footer;
