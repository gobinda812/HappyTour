import React from 'react';
import { Link } from 'react-router-dom';
import logo_transparent from '../img/logo_transparent.png';
import '../Allcss/Navfooter.css';
//import $ from 'jquery';

 function Nav() {
    /*useEffect(() => {
        $('.toggler').on('click' ,() =>{
          $(this).toggleClass('toggler-trigger');
        });
    
        $('.nav-link').on('click',()=>{
          $('.toggler').removeClass('toggler-trigger');
        });

    }, []); */

  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container">
  <a className="navbar-brand" href="/">
      <img src={logo_transparent} alt="logo_transparent" class="d-inline-block align-text-top"/>
      
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <div className="toggler">  
        <span></span>
        <span></span>
        <span></span>
      </div>  
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
       
        <li className="nav-item nav-link">
        <Link className="nav-link " to="/">Home</Link>
        </li>

        <li className="nav-item nav-link">
        <Link className="nav-link " to="/aboutus">About Us</Link>
        </li>
       
        <li className="nav-item nav-link">
          <Link className="nav-link" to="/contact">Contact Us</Link>
        </li>
        
       </ul>
    </div>
  </div>
</nav>      
    </>
  )
}

export default Nav
