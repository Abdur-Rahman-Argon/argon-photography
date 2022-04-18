import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer class="container">
        <div class="content">
          <div class="topic">
            <h2>Created By</h2>
            <h3>Md. Abdur Rahman</h3>
          </div>

          <div class="lower">
            <div class="topic">Contact us</div>
            <div class="phone">
              <a href="# ">+007 9089 6767</a>
            </div>
            <div class="email">
              <a href="# ">abdurrahman@gmail.com</a>
            </div>
          </div>
        </div>
        <h3 class="text-center text-white">Thanks for visited our website</h3>
        <div class="bottom">
          <p>
            &copy; copyright All right reserve <span> Md. Abdur Rahman</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
