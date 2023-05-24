import React from 'react';
import { useNavigate } from "react-router-dom";

import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Pagination, Scrollbar, A11y } from "swiper";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../Allcss/index.css';

import h1 from '../img/h1.jpg'
import h2 from '../img/h2.jpg'
import h3 from '../img/h3.jpg'
import tour_guide from '../img/tour-guide.png'
import tour_guide2 from '../img/tour-guide2.png'
import tour_guide3 from '../img/tour-guide3.png'
import tour_guide4 from '../img/tour-guide4.png'
import bhutan from '../img/bhutan.jpg'
import bhutan1 from '../img/bhutan1.jpg'
import bhutan2 from '../img/bhutan2.jpg'
import bhutan3 from '../img/bhutan3.jpg'
import bhutan4 from '../img/bhutan4.jpg'
import bhutan5 from '../img/bhutan5.jpg'

function Index() {
  const navigate = useNavigate();
  return (
    <>
<div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src={h1} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
      <h2>Find your next tour !!</h2>
        <p>Discover New Worlds</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src={h2} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
      <h2>Find your next tour !!</h2>
        <p>Discover New Worlds</p>
      </div>
    </div>
    <div className="carousel-item">
    <img src={h3} className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-md-block">
      <h2>Find your next tour !!</h2>
        <p>Discover New Worlds</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
  <span className="carleft active btn" ><BsArrowLeft/></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
  <span className="carright active btn"><BsArrowRight/></span>
  </button>
</div>
<section className="search-sec">
    <div className="container">
        <form>
            <div className="row">
                <div className="col-lg-12">
                    <div className="row">
                        <div className="col-md-4 p-1">
						<label> Place:</label>
                            <input type="text" className="form-control search-slt" placeholder="Enter Place Name "/>
                        </div>
                         <div className=" col-md-4  p-1">
						 <label>  Date:</label>
                            <input type="date" className="form-control search-slt" placeholder="Check Out"/>
                        </div>
                        <div className="col-md-4 p-1">
                            <button type="button" className="btn btn-warning wrn-btn">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</section>

<section className='service'>
<div className="container">
<div className="section-title">
            <h4>Why Choose Us</h4>
        </div>
<div className="row row-cols-1 row-cols-md-4 g-2">
  <div className="col">
    <div className="service_card h-100">
      <img src={tour_guide} className="service_card-img-top" alt="..."/>
        <p className="service_card-text">2000+ Our Local Guides</p>
      </div>
  </div>
  <div className="col">
    <div className="service_card h-100">
      <img src={tour_guide2} className="service_card-img-top" alt="..."/>
        <p className="service_card-text">100% Trusted Tour Agency</p>
      </div>
  </div>
  <div className="col">
    <div className="service_card h-100">
      <img src={tour_guide3} className="service_card-img-top" alt="..."/>
         <p className="service_card-text">28+ Years of Travel Experience</p>
      </div>
  </div>
  <div className="col">
    <div className="service_card h-100">
      <img src={tour_guide4} className="service_card-img-top" alt="..."/>
        <p className="service_card-text">98% Our Travelers are Happy</p>
      </div>
  </div>
</div>
</div>
</section>

<section className='package pb-4'>
    <div className="container">
        <div className="section-title">
            <h4>PACKAGES</h4>
        </div>
        <div className="container">
        <Swiper
        freeMode={true}
        grabCursor={true}
        modules={[Navigation, Pagination, Scrollbar, FreeMode]}
        navigation={true}
        loop={true}
     
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView:1,
            spaceBetween:10,
          },
          480: {
            slidesPerView:2,
            spaceBetween:10,
          },
          768: {
            slidesPerView:3,
            spaceBetween:15,
          },
          1024: {
            slidesPerView:4,
            spaceBetween:10,
          },
          1280: {
            slidesPerView:5,
            spaceBetween:30,
          },  
        }}
    >
        <SwiperSlide>
        <div class="card tour_slider" >
      <div class="zoom-img">
        <div className="img-card">
        <img src={bhutan} alt="" />
        <div className="img_txt">5N | 7D </div>
        </div>
        </div>
  <div class="card-body">
    <h4 className="package_heading text-center">Bhutan 5 Nights | 6 Days</h4>
    <p class="package_para text-center">Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
  <div class="pb-3 text-center">
    <a href="/tourdetails" class="package_but card-link">View Details</a>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card tour_slider" >
      <div class="zoom-img">
        <div className="img-card">
        <img src={bhutan1} alt="" />
        <div className="img_txt">5N | 7D </div>
        </div>
        </div>
  <div class="card-body">
    <h4 className="package_heading text-center">Bhutan 5 Nights | 6 Days</h4>
    <p class="package_para text-center">Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
  <div class="pb-3 text-center">
    <a href="/tourdetails" class="package_but card-link">View Details</a>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card tour_slider" >
      <div class="zoom-img">
        <div className="img-card">
        <img src={bhutan2} alt="" />
        <div className="img_txt">5N | 7D </div>
        </div>
        </div>
  <div class="card-body">
    <h4 className="package_heading text-center">Bhutan 5 Nights | 6 Days</h4>
    <p class="package_para text-center">Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
  <div class="pb-3 text-center">
    <a href="/tourdetails" class="package_but card-link">View Details</a>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card tour_slider" >
      <div class="zoom-img">
        <div className="img-card">
        <img src={bhutan3} alt="" />
        <div className="img_txt">5N | 7D </div>
        </div>
        </div>
  <div class="card-body">
    <h4 className="package_heading text-center">Bhutan 5 Nights | 6 Days</h4>
    <p class="package_para text-center">Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
  <div class="pb-3 text-center">
    <a href="/tourdetails" class="package_but card-link">View Details</a>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card tour_slider" >
      <div class="zoom-img">
        <div className="img-card">
        <img src={bhutan4} alt="" />
        <div className="img_txt">5N | 7D </div>
        </div>
        </div>
  <div class="card-body">
    <h4 className="package_heading text-center">Bhutan 5 Nights | 6 Days</h4>
    <p class="package_para text-center">Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
  <div class="pb-3 text-center">
    <a href="/tourdetails" class="package_but card-link">View Details</a>
  </div>
</div>
        </SwiperSlide>

        <SwiperSlide>
        <div class="card tour_slider" >
      <div class="zoom-img">
        <div className="img-card">
        <img src={bhutan5} alt="" />
        <div className="img_txt">5N | 7D </div>
        </div>
        </div>
  <div class="card-body">
    <h4 className="package_heading text-center">Bhutan 5 Nights | 6 Days</h4>
    <p class="package_para text-center">Jaigaon - Thimpu - Punakha - Paro</p>
  </div>
  <div class="pb-3 text-center">
    <a href="/tourdetails" class="package_but card-link">View Details</a>
  </div>
</div>
        </SwiperSlide>


      </Swiper>
        </div>
    </div>
</section>

<section className="gallery my-3">
<div className="section-title">
            <h4>Special Tours</h4>
        </div>
  <div className="container">
<div className="col-md-12">
  <div className="row mb-2">
  <div className="col-md-3 mb-3">

   <a className='gal_link' href="/tourlist"> 
  <div class="image-zoom">
    <img src={bhutan} alt="" className=''/>
    <div className="gal_caption">
        <h3 className=''>Ladakh</h3>
    </div>
    </div>
    </a>
  </div>
  
  <div className="col-md-6 mb-3">
  
  <a className='gal_link' href="/tourlist">
  <div class="image-zoom">
    <img src={bhutan1} alt="" className='' />
    <div className="gal_caption">
        <h3 className=''>Australia</h3>
    </div>
  </div>
  </a>
  </div>

  <div className="col-md-3 mb-3">

    <a className='gal_link' href="/tourlist" >
  <div class="image-zoom">
    <img src={bhutan2} alt="" className='' />
    <div className="gal_caption">
        <h3 className=''>Africa</h3>
    </div>
  </div>
  </a>

  </div>
  </div>
  <div className="row mb-2">

  <div className="col-md-3 mb-3">
  <a className='gal_link' href="/tourlist">
  <div class="image-zoom">  
      <img src={bhutan3} alt="" className='' />
      <div className="gal_caption">
        <h3 className=''>Paris</h3>
    </div>
    </div>
    </a>
    </div>

    <div className="col-md-3 mb-3">

    <a className='gal_link' href="/tourlist">
    <div class="image-zoom">
      <img src={bhutan4} alt="" className='' />
      <div className="gal_caption">
        <h3 className=''>Switzerland</h3>
    </div>
    </div>
    </a>

    </div>

    <div className="col-md-3 mb-3">

      <a className='gal_link' href="/tourlist">
    <div class="image-zoom">
      <img src={bhutan5} alt="" className='' />
      <div className="gal_caption">
        <h3 className=''>London</h3>
    </div>
    </div>
    </a>

    </div>

    <div className="col-md-3 mb-3">
      
      <a className='gal_link' href="/tourlist">
    <div class="image-zoom">
      <img src={bhutan2} alt="" className='' />
      <div className="gal_caption">
        <h3 className=''>Dubai</h3>
    </div>
    </div>
    </a>
    </div>
    </div>

    <div className="row mb-2">

  <div className="col-md-6 mb-3">

    <a className='gal_link' href="/tourlist">
  <div class="image-zoom">
      <img src={bhutan3} alt="" className='' />
      <div className="gal_caption">
        <h3 className=''>Spain</h3>
    </div>
    </div>
    </a>
    </div>

    <div className="col-md-3 mb-3">

      <a className='gal_link' href="/tourlist">
    <div class="image-zoom">
      <img src={bhutan4} alt="" className='' />
      <div className="gal_caption">
        <h3 className=''>Europe</h3>
    </div>
    </div>
    </a>
    </div>

    <div className="col-md-3 mb-3">
      <a className='gal_link'href="/tourlist">
    <div class="image-zoom">
      <img src={bhutan5} alt="" className='' />
      <div className="gal_caption">
        <h3 className=''>Maldives</h3>
    </div>
    </div>
    </a>
    </div>

    </div>

  </div>
</div>

</section>

    
    </>
  )
}

export default Index
