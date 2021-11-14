import React from "react";


function Header() {
  return (
    <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            <a href="index.html" class="logo">
            </a>
            
            <ul className="nav">
              <li><a href="index.html" className="active">Home</a></li>
              
              <li><a href="pastwork.html">Past Work</a></li>
              <li><a href="contact.html">Contact Me</a></li>  
            </ul>        
          </nav>
        </div>
      </div>
    </div>
  </header>
  )
}

export default Header;