import React from 'react';

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="about"> 
          </div>
        </div>
        <div className="col-lg-4">
          <div className="helpful-links">
            <h4>Helpful Links</h4>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li><a href="#">Past Work</a></li>
                  <li><a href="#">Listing</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
              <div class="col-lg-6">
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="contact-us">
            <h4>Contact Me </h4>
            <p> email</p>
            <p> github</p>
            <p> linkedIn</p>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="sub-footer">
            <p>Copyright © 2021 Megan Watson, All Rights Reserved.
            <br/>
			Design: <a rel="nofollow" href="https://templatemo.com" title="CSS Templates">TemplateMo</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;