import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

import '../Allcss/Error.css'

import { ImLocation2 } from "react-icons/im";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { IoMdMail } from "react-icons/io"

const Contact = () => {
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          phone: "",
          message: "",
        },

        validationSchema: Yup.object({
            name: Yup.string()
              .required("**Required**"),

              email: Yup.string().email("Invalid Email").required("**Required**"),
              
              phone: Yup.string()
                .required("**Required**")
                .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),
          }),

        onSubmit: (values) => {
            console.log(values);
          },
        });    
  return (
    <>
      <section className="tour_banner">
 <div className="jumbotron">
  <div className="container">
  <div className="banner_text">
  <h2 className=" text-center ">Contact Us</h2>
  <p className="lead">A mind that is stretched by a new experience can never go back to its old dimensions.</p>
  </div>
</div>
</div>
  </section>

      <section className='contact-form'>
        <div className="container">
          <div className='contact_containt'>
    <div className="form">
        <div className="contact-info">
            <h3 className="title">Let's get in touch</h3>
            
            <p className="text"> Contact us with the following details. and fillup the form with the details. </p>
            <div className="info">
                <div className="social-information">
                    <p> <ImLocation2/> Dumdum, Kaikhali, Kolkata</p>
                </div>
                <div className="social-information">
                    <p><IoMdMail/> contact@happytour&travel.com</p>
                </div>
                <div className="social-information">
                    <p><FaPhoneAlt/> +91 1234567890 </p>
                </div>
            </div>
            <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons"> 
                <a href="https://www.facebook.com/" target='_blank'><i><FaFacebook/></i> </a> 
                <a href="https://twitter.com/" target='_blank'> <i><FaTwitter/></i> </a>
                <a href="https://www.instagram.com/" target='_blank'> <i><FaInstagram/> </i> </a> 
                <a href="https://in.pinterest.com/" target='_blank'> <i><FaPinterest/></i> </a> </div>
            </div>
        </div>
        <div className="contact-info-form"> <span className="circle one"></span> <span className="circle two"></span>
            <form action="#" onSubmit={formik.handleSubmit} autoComplete="off">
                 <h3 className="title">Contact us</h3> 
                <div className="social-input-containers"> 
                <input type="text" name="name" onChange={formik.handleChange}value={formik.values.name} className="input" placeholder="Name" /> </div>
                
                {formik.errors.name ? <p className='error'><small>{formik.errors.name}</small></p> : null}
                
                <div className="social-input-containers"> 
                <input type="email" name="email" onChange={formik.handleChange}value={formik.values.email} className="input" placeholder="Email" />  </div>
                
                {formik.errors.email ? <p className='error'><small>{formik.errors.email}</small></p> : null}
                               
                <div className="social-input-containers"> 
                <input type="number" name="phone" onChange={formik.handleChange}value={formik.values.phone} className="input" placeholder="Phone" />  </div>
                
                {formik.errors.phone ? <p className='error'><small>{formik.errors.phone}</small></p> : null}
               
                <div className="social-input-containers textarea">
                 <textarea name="message" onChange={formik.handleChange}value={formik.values.message} className="input" placeholder="Message"></textarea> </div> 
                <input type="submit" value="Send" className="contact_btn" />
            </form>
        </div>
    </div>
</div>
</div>
      </section>
    </>
  )
}

export default Contact

