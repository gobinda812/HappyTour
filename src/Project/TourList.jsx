import React from 'react'
import '../Allcss/index.css'
import bhutan1 from '../img/bhutan1.jpg'
import bhutan2 from '../img/bhutan2.jpg'
import bhutan3 from '../img/bhutan3.jpg'
import bhutan4 from '../img/bhutan4.jpg'
import bhutan5 from '../img/bhutan5.jpg'
import { BsFillStarFill } from "react-icons/bs";
import { FaStarHalf } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";


function TourList() {
  return (
    <>
    <section className="tour_list">
 <div className="tour_details_banner">
  <div className="container">
  <div className="banner_text">
  <h2 className=" text-center ">Top Packages</h2>
  {/* <p className="lead">A mind that is stretched by a new experience can never go back to its old dimensions.</p> */}
  </div>
</div>
</div>
  </section>
  
    <section className='tourlist'>
    <div className="container py-5">
    <div className="col md 12">
        <div className="row">  
        <div className="col-md-8">
    <div className="row pb-2 bg-white border rounded">
                <div className="col-md-3 mt-1">
				<div class="imdet mt-2"><img src={bhutan2} alt="" /></div>
				</div>
                <div className="col-md-6 mt-1">
                    <h5 className='tour_list_head'>Bhutan 6 Nights | 7 Days</h5>
                    <div className="d-flex flex-row">
                        <p className="ratings mr-2">
                        <BsFillStarFill/><BsFillStarFill/>
                        <BsFillStarFill/><BsFillStarFill/><FaStarHalf/></p>
                    </div>
                    <p className="text-justify text-truncate detail_para mb-0"><FaAddressCard/> PACKAGED ID : BH001.<br/></p>
                    <div className="mt-1 mb-1 spec">
                    <IoLocationSharp/> <span>1N JAIGAON</span><span className="dot"></span><span>2N NIGHT THIMPHU</span><span className="dot"></span><span>2N NIGHT THIMPHU<br/></span></div>
                    
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1 fw-bolder">₹2000</h4><span className="strike-text fw-bolder">₹2500</span>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <a href="/tourdetails" className='detail_button mb-1'>View Detais</a>
                        <a href="#" className='detail_button'>Book Now</a>
                    </div>
                </div>
            </div>

            <div className="row my-2 bg-white border rounded">
                <div className="col-md-3 mt-1">
				<div class="imdet mt-2"><img src={bhutan4} alt="" /></div>
				</div>
                <div className="col-md-6 mt-1">
                    <h5 className='tour_list_head'>Bhutan 6 Nights | 7 Days</h5>
                    <div className="d-flex flex-row">
                        <p className="ratings mr-2">
                        <BsFillStarFill/><BsFillStarFill/>
                        <BsFillStarFill/><BsFillStarFill/><FaStarHalf/></p>
                    </div>
                    <p className="text-justify text-truncate detail_para mb-0"><FaAddressCard/> PACKAGED ID : BH001.<br/></p>
                    <div className="mt-1 mb-1 spec">
                    <IoLocationSharp/> <span>1N JAIGAON</span><span className="dot"></span><span>2N NIGHT THIMPHU</span><span className="dot"></span><span>2N NIGHT THIMPHU<br/></span></div>
                    
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1 fw-bolder">₹2000</h4><span className="strike-text fw-bolder">₹2500</span>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <a href="/tourdetails" className='detail_button mb-1'>View Detais</a>
                        <a href="#" className='detail_button'>Book Now</a>
                    </div>
                </div>
            </div>

            <div className="row my-2 bg-white border rounded">
                <div className="col-md-3 mt-1">
				<div class="imdet mt-2"><img src={bhutan5} alt="" /></div>
				</div>
                <div className="col-md-6 mt-1">
                    <h5 className='tour_list_head'>Bhutan 6 Nights | 7 Days</h5>
                    <div className="d-flex flex-row">
                        <p className="ratings mr-2">
                        <BsFillStarFill/><BsFillStarFill/>
                        <BsFillStarFill/><BsFillStarFill/><FaStarHalf/></p>
                    </div>
                    <p className="text-justify text-truncate detail_para mb-0"><FaAddressCard/> PACKAGED ID : BH001.<br/></p>
                    <div className="mt-1 mb-1 spec">
                    <IoLocationSharp/> <span>1N JAIGAON</span><span className="dot"></span><span>2N NIGHT THIMPHU</span><span className="dot"></span><span>2N NIGHT THIMPHU<br/></span></div>
                    
                </div>
                <div className="align-items-center align-content-center col-md-3 border-left mt-1">
                    <div className="d-flex flex-row align-items-center">
                        <h4 className="mr-1 fw-bolder">₹2000</h4><span className="strike-text fw-bolder">₹2500</span>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <a href="/tourdetails" className='detail_button mb-1'>View Detais</a>
                        <a href="#" className='detail_button'>Book Now</a>
                    </div>
                </div>
            </div>

            

            </div>
            <div className="col-md-4">
            <div className="card px-2 py-2">
<div class="right_header">Related Packages !</div>
<hr />
<div class="d-flex align-items-center">
  <div class="flex-shrink-0">
  <div class="geeks mt-2"><img src={bhutan1} alt="" /></div>
  <div className="details "><a href="/tourdetails" className='rgtbtn'>View Detais</a></div>
  </div>
  <div class="flex-grow-1 ms-3">
  <h5 className="card-title right_title">Bhutan 7 Nights | 8 Days</h5>
  <p className="card-text right_para">Places Covers</p>
        <p className="card-text right_little">Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
</div>
<hr />
<div class="d-flex align-items-center">
  <div class="flex-shrink-0">
  <div class="geeks mt-2"><img src={bhutan2} alt="" /></div>
  <div className="details "><a href="/tourdetails" className='rgtbtn'>View Detais</a></div>
  </div>
  <div class="flex-grow-1 ms-3">
  <h5 className="card-title right_title">Bhutan 9 Nights | 10 Days</h5>
  <p className="card-text right_para">Places Covers</p>
        <p className="card-text right_little">Jaigaon - Thimpu - Punakha - Bumthang - Paro</p>
  </div>
</div>
<hr />
<div class="d-flex align-items-center">
  <div class="flex-shrink-0">
  <div class="geeks mt-2"><img src={bhutan3} alt="" /></div>
  <div className="details "><a href="/tourdetails" className='rgtbtn'>View Detais</a></div>
  </div>
  <div class="flex-grow-1 ms-3">
  <h5 className="card-title right_title">Bhutan 7 Nights | 8 Days</h5>
  <p className="card-text right_para">Places Covers</p>
        <p className="card-text right_little">Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
</div>
</div>
            </div>

         </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default TourList
