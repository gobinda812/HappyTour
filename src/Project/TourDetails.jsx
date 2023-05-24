import React from 'react';
import { useFormik } from "formik";
import * as Yup from "yup";
import '../Allcss/Tour.css'; 
import { FaMap } from "react-icons/fa"; 
import { FaStar } from "react-icons/fa"; 
import { FaMoneyBillWave } from "react-icons/fa"; 
import { FaPlaneDeparture } from "react-icons/fa"; 
import { AiOutlineRight } from "react-icons/ai";
import bhutan1 from '../img/bhutan1.jpg'
import bhutan2 from '../img/bhutan2.jpg'
import bhutan3 from '../img/bhutan3.jpg'

const TourDetails = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      date: "",
    },

    validationSchema: Yup.object({
        name: Yup.string()
          .required("**Required**"),

          email: Yup.string().email("Invalid Email").required("**Required**"),
          
          phone: Yup.string()
            .required("**Required**")
            .matches(/^\d{10}$/, "Phone number must be exactly 10 digits"),

          date: Yup.string()
          .required("**Required**"),  
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
  <h2 className=" text-center ">Bhutan Tour 2023</h2>
  <p className="lead">A mind that is stretched by a new experience can never go back to its old dimensions.</p>
  </div>
</div>
</div>
  </section>

 <section className="tour_bg">   
  <section className="tour_details">
  <div className="container"> 
      <div className="col-md-12">
        <div className="row">
          <div className="col-md-8">
          <div className="bg-white py-1 px-2">
            <div className="tour_heading my-4 text-center">
              <h3>Tour Starting: <span className="text-primary"> December 2023</span></h3>

            </div>
    <div className="tour_tab">
     <ul className="nav nav-tabs nav-fill" id="myTab" role="tablist"> 
     <li className="nav-item" role="presentation"> 
     <button className="tour-link active" id="faq_tab_1-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_1" type="button" role="tab" aria-controls="faq_tab_1" aria-selected="true"> 
     <div className="d-flex flex-column "> 
    <span className="detail_ico"><FaMap/></span>
    ITINERARY
    </div> 
    </button> 
     </li> 
     <li className="nav-item" role="presentation"> 
     <button className="tour-link" id="faq_tab_2-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_2" type="button" role="tab" aria-controls="faq_tab_2" aria-selected="false">
       <div className="d-flex flex-column"> 
       <span className="detail_ico"><FaStar/></span> 
       HIGHLIGHTS
       </div> 
       </button> 
       </li> 
       <li className="nav-item" role="presentation"> 
       <button className="tour-link" id="faq_tab_3-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_3" type="button" role="tab" aria-controls="faq_tab_3" aria-selected="false"> 
       <div className="d-flex flex-column">
      <span className="detail_ico"><FaMoneyBillWave/></span>
       <span className="detail_txt">DATE & PRICE</span> 
         </div> 
         </button> 
         </li> 
         <li className="nav-item" role="presentation">
           <button className="tour-link" id="faq_tab_4-tab" data-bs-toggle="tab" data-bs-target="#faq_tab_4" type="button" role="tab" aria-controls="faq_tab_4" aria-selected="false"> 
           <div className="d-flex flex-column">
             <span className="detail_ico"><FaPlaneDeparture/></span> 
             <span>BOOK THIS TOUR</span> 
             </div> 
             </button> 
             </li>
              </ul>
              </div>

               <div className="tab-content" id="myTabContent"> 
               <div className="tab-pane fade active show" id="faq_tab_1" role="tabpanel" aria-labelledby="faq_tab_1-tab">
                 <div className="container-fluid p-3"> 
                 <div className="tour_detail card my-4">
                  <div className="container">
                 <h4><span style={{color:"#6dc123"}}> Day 01 :</span> HASIMARA / NEW ALIPURDUAR JN./ FALAKATA/ BAGDOGRA AIRPORT/ NJP TO JAIGAON/PHUENTSHOLING.</h4>
                  <p>Pick Up From Hasimara / Falakata/ New Alipurduar Jn./ New Cooachbihar / NJP Railway Station / Bagdogra Airport By Our Representative Cum Driver, Then Transfer To Jaigaon / Phuentsholing ( Bhutan Boarder City)..Check In At Jaigaon / Phuentsholing Hotel, Overnight Stay There.</p>
                </div>
                </div>

                <div className="tour_detail card my-4">
                  <div className="container">
                 <h4> <span style={{color:"#6dc123"}}> Day 02 :</span> PHUENTSHOLING TO THIMPHU.</h4>
                 <p>After Breakfast Go For Immigration Permit, After Completing Immigration Formalities We Will Move Towards Thimphu – Land Of Thunder Dragon ( Appx. 178 Kms) 5/6 Hours Journey, By Road Sight Scene – Phuentsholing Gumba, Chukha Dam View, Some Beautiful Scenic Places, Waterfalls, Etc, In The Evening Check In At Thimphu Hotel, Over Night Stay At Hotel.</p>
                </div>
                </div>

                <div className="tour_detail card my-4">
                  <div className="container">
                 <h4><span style={{color:"#6dc123"}}> Day 03 :</span> THIMPHU LOCAL SIGHT SCENE.</h4>
               <p>After Breakfast Visit Thimphu ( Capital City Of Bhutan) Local Sight Scene :- Chorten Memorial, Budda Point, Chamlangthang Ground, Zoo, Handicraft Market, Chamlangthang Monastries, Tashichoe Dzong, Thimphu View Point, Other Monstries, Royal Palace View , Etc. ( Visit Hour – BST 9:00 A.M. To 5:00 P.M.) Overnight stay At Hotel.</p>
                </div>
                </div>

                <div className="tour_detail card my-4">
                  <div className="container">
                <h4><span style={{color:"#6dc123"}}> Day 04 :</span> THIMPHU TO PUNAKHA.</h4>
                <p>After Breakfast Go Towards Punakha Via Dochula Pass - The Dochula Pass is a mountainpass in the snow covered Himalayas within Bhutanon the road from Thimpu to Punakha where 108 memorial chortens or stupas known as "Druk Wangyal Chortens" have been built by Ashi Dorji Wangmo Wangchuk, the eldest Queen Mother.( Appx 80 Kms Dist. Between Thimphu To Punakha ), Check In At Punakha Hotel, After Lunch Visit Punakha Dzong -The Punakha Dzong, also known as Pungtang Dewa chhenbi Phodrang, is the administrative centre of Punakha District in Punakha, Bhutan. Constructed by Ngawang Namgyal, 1st Zhabdrung Rinpoche, in 1637–38, it is the second oldest and second largest dzong in Bhutan and one of its most majestic structures., Suspension Bridge, River Rafting – Pho Chu – Mo Chu River, In The Evening Back To Punakha Hotel, Overnight Stay At Hotel.</p>
                </div>
                </div>

                <div className="tour_detail card my-4">
                  <div className="container">
                 <h4><span style={{color:"#6dc123"}}> Day 05 :</span> PUNAKHA TO PARO.</h4>
                 <p>After breakfast Check Out From Punakha & Move Towards Paro - Paro is a valley town in Bhutan, west of the capital, Thimphu. It is the site of the country’s only international airport and is also known for the many sacred sites in the area. North of town, the Taktsang Palphug (Tiger’s Nest) monastery clings to cliffs above the forested Paro Valley. Northwest of here are the remains of a defensive fortress, Drukgyel Dzong, dating from the 17th century. Elevation: 2,200 m( Appx 145 Kms Dist Between Punakha To Paro), Check In At Paro Hotel, After Lunch Visit – Paro Dzong- Rinpong Dzong, Paro National Museum, Drugyel Dzong, Paro Market, Overnight Enjoying Paro,</p> 
                  </div>
                </div>

                <div className="tour_detail card my-4">
                  <div className="container">
                 <h4><span style={{color:"#6dc123"}}> Day 06 :</span> PARO CHELELA PASS SIGHT SCENE.</h4>
                <p>After Breakfast Visit Paro Chelela pass – High Altitude -Chele La Pass at over 13,000 ft to the west above the Paro Valley is the highest road pass in the country and has amazing views of the Himalaya especially that of Mt. Jhomolari, Bhutan’s most sacred peak at over 22,000 feet. Chele La Pass is a one and a half hour drive from the valley floor in Paro. Apart from the beautiful view, the pass is also a hot spot for flora & fauna.After Enjoy The Heights Then Back To Paro With, After lunch Visit Paro Taksang Lhakhang View, Overnight Stay At Hotel.</p>
                  </div>
                </div>
                
                   
                      <div className="mt-4 d-flex justify-content-end">
                         </div>
                          </div> 
                          </div>
                           <div className="tab-pane fade" id="faq_tab_2" role="tabpanel" aria-labelledby="faq_tab_2-tab">
                           <div className="container p-3 scroll-y"> 
                           
                           <div className="tour_highlight card my-4">
                              <div className="container">
                            <h4> Inclusion </h4>
                            <ul>
                              <li><AiOutlineRight/> Accommodation on twin Sharing Basis.</li>
                              <li><AiOutlineRight/> Meal Plan (Please refer Cost sheet)</li>
                              <li><AiOutlineRight/> Exclusive Non a/c vehicle for transfers & sightseeing. Please brief to guest that vehicle will not be at disposal it will be available to guest as per itinerary only (point to point basis)</li>
                              <li><AiOutlineRight/> All permit fees & hotel taxes (as per itinerary).</li>
                              <li><AiOutlineRight/> Rates are valid for INDIAN NATIONALS only</li>
                              </ul>
                              </div>
                            </div>

                            <div className="tour_highlight card my-4">
                              <div className="container">
                            <h4> Exclusion </h4>
                            <ul>
                              <li><AiOutlineRight/> Air Fare / Train fare.</li>
                              <li><AiOutlineRight/> Personal expenses such as laundry, telephone calls, tips & gratuity, mineral water, soft & hard drinks, rafting, rock climbing, paragliding, joy ride (Toy Train), porterage.</li>
                              <li><AiOutlineRight/> Additional sightseeing or extra usage of vehicle, other than mentioned in the itinerary.</li>
                              <li><AiOutlineRight/> Entrance Fees & Guide charges.</li>
                              <li><AiOutlineRight/> Any cost arising due to natural calamities like, landslides, road blockage, political disturbances (strikes), etc (to be borne by the client),</li>
                              <li><AiOutlineRight/> Any increase in taxes or fuel price, leading to increase in cost on surface transportation & land arrangements, which may come into effect</li>
                              <li><AiOutlineRight/> Prior to departure.</li>
                              <li><AiOutlineRight/> Travel Insurance.</li>
                              </ul>
                              </div>
                            </div>

                            <div className="tour_highlight card my-4">
                              <div className="container">
                            <h4> Child Policy  : </h4>
                            <ul>
                              <li><AiOutlineRight/> Child Below 5 yrs complimentary</li>
                              <li><AiOutlineRight/> Child 5 -10 yrs with extra bed as mention in cost column (CWB = Child with Bed)</li>
                              <li><AiOutlineRight/> Child 5 -10 yrs without extra bed as mention in cost column (CNB = Child no Bed)</li>
                              <li><AiOutlineRight/>  Above 10 years / Extra adult with an extra bed sharing room are same & charged as per (EPSR)</li>
                              <li><AiOutlineRight/> Hotels are very strict with the child policy. Please carry the age proof so that it can be produced if asked by hotel.</li>
                              </ul>
                              </div>
                            </div>

                            <div className="tour_highlight card my-4">
                              <div className="container">
                            <h4> Cancellation Policy : </h4>
                            <ul>
                            <li><AiOutlineRight/> Minimum Cancellation is Rs. 1000 per Head.</li>
                            <li><AiOutlineRight/> 25% Between 30-20 Days Before Tour Departure</li>
                            <li><AiOutlineRight/> 50% Between 20-10 Days Before Tour Departure</li>
                            <li><AiOutlineRight/> 75% Between 10-05 Days Before Tour Departure</li>
                            <li><AiOutlineRight/> 100% on the Same Day & No show.</li>
                            <li><AiOutlineRight/> Cancellation charges as % of Total Tour Cost.</li>
                            </ul>
                              </div>
                            </div>

                            </div>
                            </div> 
                            <div className="tab-pane fade" id="faq_tab_3" role="tabpanel" aria-labelledby="faq_tab_3-tab"> 
                            <div className="container p-3 mt-4"> 
                            <div className="tour_price">
                              <h1>Tour Duration: 14 Nights & 15 Days</h1>
                              <p>PACKAGE COST: 
                              <span style={{fontSize:28,color:"#990000",fontWeight:"bold"}}>$4,000 - ₹2,80,000</span> - Per person (Double Occupancy)</p>
                            </div>
                            </div>
                            </div>
                            <div className="tab-pane fade" id="faq_tab_4" role="tabpanel" aria-labelledby="faq_tab_4-tab"> 
                          <div className="container p-3">
                          <div className="wrapper bg-white">
    <div className="h2 text-center">Book Now</div>
    <div className="tour_book">
    <form className="t_b pt-3" onSubmit={formik.handleSubmit} autoComplete="off">
        <div className="form-group py-2">            
            <div className="input-field"> 
            <input type="text" name='name' onChange={formik.handleChange}value={formik.values.name} placeholder="Name"/>
            </div> 
            {formik.errors.name ? <p className='error'><small>{formik.errors.name}</small></p> : null}
         
           
        </div>
        
        <div className="form-group py-1 pb-2">
            <div className="input-field"> 
          <input type="email" name='email' placeholder="Email" onChange={formik.handleChange}value={formik.values.email} /></div>
         
          {formik.errors.email ? <p className='error'><small>{formik.errors.email}</small></p> : null}
            
        </div>

        <div className="form-group py-1 pb-2">
            <div className="input-field"> 
          <input type="number" name='phone' onChange={formik.handleChange}value={formik.values.phone} placeholder="Phone Number" /> <button className="btn bg-white text-muted"> <span className="far fa-eye-slash"></span> </button> </div>

          {formik.errors.phone ? <p className='error'><small>{formik.errors.phone}</small></p> : null}
               
        </div>

        <div className="form-group py-1 pb-2">
            <div className="input-field"> 
          <input type="date" name='date' onChange={formik.handleChange}value={formik.values.date} placeholder="Travel Date" /> <button className="btn bg-white text-muted"> <span className="far fa-eye-slash"></span> </button> </div>

          {formik.errors.date ? <p className='error'><small>{formik.errors.date}</small></p> : null}
               
        </div>

         <button className="btn btn-block">Submit</button>
    </form>
    </div>
</div>
                        </div>
                       </div>
                     </div> 
                    </div>
          </div>
          <div className="col-md-4">
<div className="card mt-2 px-2 py-2">
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
  </section>     
  </>

  )

}
export default TourDetails;
