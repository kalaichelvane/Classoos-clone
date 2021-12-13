import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function footer() {
  return (
    <div style={{ backgroundColor: "#3f3f3f" }}>
      <br />
      <br />

      <div className="pant">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <h3 className="footer_header" style={{ color: "#ffffff" }}>
              Classoos
            </h3>

            <ul style={{ listStyleType: "none", color: "rgb(173, 173, 173)" }}>
              <li>Home</li>
              <li>Online textbook store</li>
              <li>Buy textbooks for your students</li>
              <li>Features</li>
              <li>Classoos Pro</li>
              <li>Product tour</li>
              <li>Pricing</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="footer_header" style={{ color: "#ffffff" }}>
              Help Hub
            </h3>

            <ul style={{ listStyleType: "none", color: "rgb(173, 173, 173)" }}>
              <li>Get Help</li>
              <li>Tutorial Videos</li>
              <li>Guides</li>
              <li>Technical</li>
              <li>FAQ</li>
            </ul>
          </div>
        </div>
        <div className="footer_about">
          <h3 className="footer_header">About</h3>

          <ul style={{ listStyleType: "none", color: "rgb(173, 173, 173)" }}>
            <li>About Us</li>
            <li>Terms and Conditions</li>
            <li>Privacy policy</li>
            <li>Contact Us</li>
            <li>Become a Partner</li>
          </ul>
        </div>
      </div>

      <div className="iconic">
        <div>
          <FaTwitter /> &nbsp;&nbsp;&nbsp;&nbsp;
          <FaFacebookF /> &nbsp;&nbsp;&nbsp;&nbsp;
          <FaYoutube />
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default footer;
