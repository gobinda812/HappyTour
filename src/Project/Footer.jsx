import React from 'react'
import '../Allcss/Navfooter.css'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import bhutan1 from '../img/bhutan1.jpg'
import bhutan2 from '../img/bhutan2.jpg'
import bhutan3 from '../img/bhutan3.jpg'
const Footer = () => {
  return (
	<>
      <section id="footer">
		<div class="container">
			<div class="row text-sm-left text-md-left">
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>About Us</h5>
                    <hr />
					<p>Welcome to the Happy Tour & Travel, which is located at Kaikhali which is a small village located in the Dumdum (Kolkata) , West Bengal , India.</p>
                <ul class="list-unstyled foot_contact">
                    <li><a href="#"><FaEnvelope/>&nbsp;Mail :&nbsp; happytour&travel@gmail.com</a></li>
					<li><a href="#"><ImLocation2 />&nbsp;Location :&nbsp;Dumdum, Kaikhali</a></li>
					<li><a href="#"><FaPhoneAlt/>&nbsp;Phone :&nbsp;+91 9088830729</a></li>
					<li><a href="#"><FaPhoneAlt/>&nbsp;Phone :&nbsp;+91 7059738744</a></li>
					</ul>
                </div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Special Packages</h5>
                    <hr />
					<ul class="list-unstyled quick-links">
                    <li>
					<a href="#">	
					<div class="d-flex align-items-center">
  <div class="flex-shrink-0">
  <div class=""><img src={bhutan3} alt="" /></div>
  </div>
  <div class="flex-grow-1 ms-3">
    <p className="foot-text_head">Bhutan 7 NIGHTS | 8 DAYS</p>
    <p className="foot-text_little"><IoLocationSharp/> Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
</div>
					</a>
					</li>
					</ul>

					<ul class="list-unstyled quick-links">
                    <li>
					<a href="#">	
					<div class="d-flex align-items-center">
  <div class="flex-shrink-0">
  <div class=""><img src={bhutan2} alt="" /></div>
  </div>
  <div class="flex-grow-1 ms-3">
    <p className="foot-text_head">Bhutan 7 NIGHTS | 8 DAYS</p>
    <p className="foot-text_little"><IoLocationSharp/> Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
</div>
					</a>
					</li>
					</ul>

					<ul class="list-unstyled quick-links">
                    <li>
					<a href="#">	
					<div class="d-flex align-items-center">
  <div class="flex-shrink-0">
  <div class=""><img src={bhutan1} alt="" /></div>
  </div>
  <div class="flex-grow-1 ms-3">
    <p className="foot-text_head">Bhutan 7 NIGHTS | 8 DAYS</p>
    <p className="foot-text_little"><IoLocationSharp/> Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
</div>
					</a>
					</li>
					</ul>

				</div>
				<div class="col-xs-12 col-sm-4 col-md-4">
					<h5>Our Location</h5>
                    <hr className='mb-4' />
                    <iframe
        title="Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14730.494654357311!2d88.42632823536513!3d22.630524426907943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89e36767f36ab%3A0x3d7c938cf7eece45!2sKaikhali%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1684522114465!5m2!1sen!2sin"
        width="350"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>      
                    <hr />
					
				</div>
				
				
			</div>
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12">
					<ul class="list-unstyled list-inline social text-center">
						<li class="list-inline-item"><a href="#"><FaFacebook/></a></li>
						<li class="list-inline-item"><a href="#"><FaTwitter/></a></li>
						<li class="list-inline-item"><a href="#"><FaInstagram/></a></li>
						<li class="list-inline-item"><a href="#"><FaPinterest/></a></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div class="row">
				<div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
					<p class="h6">Happy Tour & Travel © 2023. All right Reserved.<a class="text-green ml-2" href="#" target="_blank">Website Name</a></p>
				</div>
				
			</div>	
		</div>
	</section>
    </>
  )
}

export default Footer
