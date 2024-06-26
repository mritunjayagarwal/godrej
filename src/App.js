import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import pricing from './data/pricing';

function Project() {
  const [selected, setSelected] = useState("btn1");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const responsive = {
    1366: {
      items: 4,
      margin: 40
    },
    1024: {
      items: 3,
      dots: true,
    },
    768: {
      items: 1,
      dots: true,
    },
    0: {
      items: 1,
      dots: true,
    }
  }
  return (
    <div>
      <main>
        <nav class="navbar navbar-expand-lg m-0 fixed-top border bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="/" style = {{color: "#000", fontWeight: "600"}}>GODREJ | PROPERTIES</a>
            <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarText"
              aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse text-white" id="navbarText">
              <ul class="navbar-nav me-auto mx-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a href="#overview" class="px-3 pt-2 btn-link">
                    Overview
                  </a>
                </li>
                <li class="nav-item">
                  <a class='px-3 pt-2 btn-link' href='#plans'>
                    Floor Plans
                  </a>
                </li>
                <li class="nav-item">
                  <a class='px-3 pt-2 btn-link' href='#highlights'>
                    Project Highlights
                  </a>
                </li>
                <li class="nav-item">
                  <a class='px-3 pt-2 btn-link' href='#price'>
                    Price
                  </a>
                </li>
                <li class="nav-item">
                  <a class='px-3 pt-2 btn-link' href='#gallery'>
                    Gallery
                  </a>
                </li>
                <li class="nav-item">
                  <a class='px-3 pt-2 btn-link' href='#location'>
                    Location
                  </a>
                </li>
              </ul>
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item godrej-logo-wrapper">
                  <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/project_logo.png" class="img-fluid godrej-logo-right" alt="" />
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <section className='p-0 mt-5 hero-section'>
          <div className='branding-modal'>
            <h1 className='branding-title-location'>GODREJ 146 | NOIDA SEC-146</h1>
            <h1 className='branding-title-specs'><span className='highlight'>3/4 BHK</span> Ultra Luxury Apartments</h1>
            <h1 className='branding-title-price'>Price: On Request</h1>
            <button className='floor-plan-item-btn mt-2' onClick={handleShow}>Enquire Now</button>
          </div>
          <OwlCarousel className='owl-theme' loop items={1} autoplay={true} autoplayTimeout={3000} dots={false} nav={false}>
            <div class='item d-flex align-items-center'>
              <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/slider/slide2.jpg" className='w-100' alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/slider/slide1.jpg" className='w-100' alt="" />
            </div>
          </OwlCarousel>
        </section>
        <section className="overview" id = "overview">
          <div className='container-fluid overview-padding'>
            <div className="overview-wrapper">
              <div className='row pl-3'>
                <div className='col-lg-3 border-partial'>
                  <div className='border-partial-right-top'></div>
                  <div className='border-partial-right-bottom'></div>
                </div>
              </div>
              <div className='overview-absolute'>
                <div className='row d-flex align-items-center h-100'>
                  <div className='col-lg-2 text-center'>
                    <h1 className='text-white overview-title'>Overview</h1>
                  </div>
                  <div className='col-lg-10'>
                    <div className='overview-main'>
                      <h1 className='text-white overview-title'>YOUR TICKET TO A LIFETIME OF EXOTIC LIVING</h1>
                      <p className='text-white'>Discover the allure of tropical islands with greens and lagoons along the expressway, it is a tropical haven built with the vision of giving you the finest living experience. Enjoy your uniquely designed 3 and 4 bed bespoke homes to the fullest with Island themed landscape. Here, every door opens into a magnificent world of possibilities in the lap of luxury, with an incredible view.</p>
                      <h5 className='text-white overview-title-2'>Discover Spacious 3BHK & 4BHK Homes Starting from ₹3.20 Crore*</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='overview-description'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 d-flex align-items-center'>
                <div>
                  <h1 className='section-header'>Godrej 146 Overview</h1>
                  <hr className='blue-hr mb-3' style={{ margin: "unset" }} />
                  <p>With three towers and a clubhouse with beachfront, it is a tropical haven built with the vision of giving you the finest living experience, every day on Noida Expressway.</p>
                  <p>Enjoy your uniquely designed 3 and 4 bed bespoke homes to the fullest with Island themed landscape and robust 5-tier security. Here, every door opens into a magnificent world of possibilities in the lap of luxury, with an incredible view.</p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <div className='gradient-bg h-100 d-flex align-items-center justify-content-center'>
                      <div className='d-flex text-center'>
                        <div className='px-5' style={{ flex: 1 }}>
                          <p><i className='fa fa-bed'></i></p>
                          <p className='overview-config-title'>Configuration</p>
                          <p className='overview-config-desc'>3 BHK</p>
                        </div>
                        <div className='px-5' style={{ flex: 1 }}>
                          <p><i className='fa fa-bed'></i></p>
                          <p className='overview-config-title'>Configuration</p>
                          <p className='overview-config-desc'>4 BHK</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='col-lg-12'>
                    <div className='gradient-bg h-100 d-flex align-items-center justify-content-center'>
                      <div className='d-flex text-center'>
                        <div className='px-5' style={{ flex: 1 }}>
                          <p><i className='fa fa-bed'></i></p>
                          <p className='overview-config-title'>Area</p>
                          <p className='overview-config-desc'>On Request</p>
                        </div>
                        <div className='px-5' style={{ flex: 1 }}>
                          <p><i className='fa fa-bed'></i></p>
                          <p className='overview-config-title'>Type</p>
                          <p className='overview-config-desc'>Residential</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id = "plans">
          <div className='container'>
            <h1 className='section-header text-center'>Plans</h1>
            <hr className='blue-hr' />
            <div className='text-center mt-5'>
              <div className="buttons">
                <button id="option1Btn" className={selected === "btn1" ? "selected" : "notSelected"} onClick={() => setSelected("btn1")}>
                  Master Plan
                </button>
                <button className={selected === "btn2" ? "selected" : "notSelected"} onClick={() => setSelected("btn2")}>
                  Unit Plans
                </button>
              </div>
            </div>
            <div className={selected == 'btn1' ? 'mt-5 display-block' : 'display-none'}>
              <img src="https://www.godrejproperties.com/_next/image?url=https%3A%2F%2Fdelf2iyv2crlj.cloudfront.net%2FImages%2Fdw-Godrej-TropicalIsle-Ncr-Master-Plan_1820X800%204f504b8b-2b71-4a45-b66b-83792abf60c3.webp&w=1920&q=75" className='img-fluid' alt="" />
            </div>
            <div className={selected == 'btn2' ? 'display-block' : 'display-none'}>
              <div className={`mt-5 row`}>
                <div className='col-lg-4'>
                  <div className='floor-plan-item'>
                    <div className=''>
                      <div className='border floor-plan-item-img-wrapper'>
                        <img src="https://fpg.roomsketcher.com/image/supplier/22/image/Apartment-3D-Floor-Plan.jpg" className='img-fluid floor-img' alt="" />
                      </div>
                      <div className='d-flex align-items-center mt-3'>
                        <div className='d-flex align-items-center'>
                          <div className='px-2 d-flex align-items-center justify-content-center'>
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/double-bed-icon.png" className='img-fluid bed-icon' alt="" />
                          </div>
                          <div className=''>
                            <p className='m-0 floor-plan-item-type'>Type</p>
                            <p className='m-0 floor-plan-item-desc' style = {{color: "#c3aa62"}}>3 BHK</p>
                          </div>
                        </div>
                      </div>
                      <button className='floor-plan-item-btn mt-3' variant="primary" onClick={handleShow}>Price Breakup</button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='floor-plan-item'>
                    <div className=''>
                      <div className='border floor-plan-item-img-wrapper'>
                        <img src="https://fpg.roomsketcher.com/image/supplier/22/image/Apartment-3D-Floor-Plan.jpg" className='img-fluid floor-img' alt="" />
                      </div>
                      <div className='d-flex align-items-center mt-3'>
                        <div className='d-flex align-items-center'>
                          <div className='px-2 d-flex align-items-center justify-content-center'>
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/double-bed-icon.png" className='img-fluid bed-icon' alt="" />
                          </div>
                          <div className=''>
                            <p className='m-0 floor-plan-item-type'>Type</p>
                            <p className='m-0 floor-plan-item-desc' style = {{color: "#c3aa62"}}>3 BHK + U</p>
                          </div>
                        </div>
                      </div>
                      <button className='floor-plan-item-btn mt-3' onClick={handleShow}>Price Breakup</button>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4'>
                  <div className='floor-plan-item'>
                    <div className=''>
                      <div className='border floor-plan-item-img-wrapper'>
                        <img src="https://fpg.roomsketcher.com/image/supplier/22/image/Apartment-3D-Floor-Plan.jpg" className='img-fluid floor-img' alt="" />
                      </div>
                      <div className='d-flex align-items-center mt-3'>
                        <div className='d-flex align-items-center'>
                          <div className='px-2 d-flex align-items-center justify-content-center'>
                            <img src="https://uxwing.com/wp-content/themes/uxwing/download/household-and-furniture/double-bed-icon.png" className='img-fluid bed-icon' alt="" />
                          </div>
                          <div className=''>
                            <p className='m-0 floor-plan-item-type'>Type</p>
                            <p className='m-0 floor-plan-item-desc' style = {{color: "#c3aa62"}}>4 BHK + U</p>
                          </div>
                        </div>
                      </div>
                      <button className='floor-plan-item-btn mt-3' onClick={handleShow}>Price Breakup</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='configurations-section' id = "highlights">
          <div className='container'>
            <h1 className='text-center section-header'>Configurations</h1>
            <hr className='blue-hr' />
            <div className='mt-5 table-responsive text-nowrap' style={{ background: "#fff", padding: "5px" }}>
              <table class="table table-striped table-fixed text-center m-0">
                <thead style={{ background: "#C3AA62", color: "#fff", borderTop: "2px solid #C3AA62", fontWeight: 300 }}>
                  <tr>
                    <th scope="col">Typology</th>
                    <th scope="col" colSpan={2}>Carpet Area</th>
                    <th scope="col">Exclusive Area (Sq m)</th>
                    <th scope="col">Super Area (Sq ft)</th>
                    <th scope="col">Check Price</th>
                  </tr>
                </thead>
                <tbody className='bg-light'>
                  <tr>
                    <th scope="row">3 BHK (Type-1)</th>
                    <td style = {{borderRight: "2px solid #c3aa62"}}>90.84 SQM</td>
                    <td>21.38 SQFT</td>
                    <td>21.38</td>
                    <td>21.38</td>
                    <td><button className='floor-plan-item-btn' onClick={handleShow}>Check Price</button></td>
                  </tr>
                  <tr>
                    <th scope="row">4 BHK (Type-1)</th>
                    <td style = {{borderRight: "2px solid #c3aa62"}}>90.84 SQM</td>
                    <td>21.38 SQFT</td>
                    <td>21.38</td>
                    <td>21.38</td>
                    <td><button className='floor-plan-item-btn' onClick={handleShow}>Check Price</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <h1 className='text-center section-header'>Project Details</h1>
            <hr className='blue-hr' />
            <div className='row'>
              <div className='col-lg-3'>
                <div className='project-card d-flex align-items-center justify-content-center'>
                  <div>
                    <div className='d-flex align-items-center justify-content-center' style={{ position: "relative" }}>
                      <div className='circle'>
                        <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                      </div>
                      <span className='dot'></span>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card d-flex align-items-center justify-content-center'>
                  <div>
                    <div className='d-flex align-items-center justify-content-center' style={{ position: "relative" }}>
                      <div className='circle'>
                        <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/2.png" className='img-fluid'></img>
                      </div>
                      <span className='dot'></span>
                    </div>
                    <h1 className='project-item-title mt-2'>Floating Cafe</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card d-flex align-items-center justify-content-center'>
                  <div>
                    <div className='d-flex align-items-center justify-content-center' style={{ position: "relative" }}>
                      <div className='circle'>
                        <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/3.png" className='img-fluid'></img>
                      </div>
                      <span className='dot'></span>
                    </div>
                    <h1 className='project-item-title mt-2'>Raised Pavilion</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card d-flex align-items-center justify-content-center'>
                  <div>
                    <div className='d-flex align-items-center justify-content-center' style={{ position: "relative" }}>
                      <div className='circle'>
                        <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/4.png" className='img-fluid'></img>
                      </div>
                      <span className='dot'></span>
                    </div>
                    <h1 className='project-item-title mt-2'>Business Center And Library</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card d-flex align-items-center justify-content-center'>
                  <div>
                    <div className='d-flex align-items-center justify-content-center' style={{ position: "relative" }}>
                      <div className='circle'>
                        <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/5.png" className='img-fluid'></img>
                      </div>
                      <span className='dot'></span>
                    </div>
                    <h1 className='project-item-title mt-2'>Squash Court</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card d-flex align-items-center justify-content-center'>
                  <div>
                    <div className='d-flex align-items-center justify-content-center' style={{ position: "relative" }}>
                      <div className='circle'>
                        <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/6.png" className='img-fluid'></img>
                      </div>
                      <span className='dot'></span>
                    </div>
                    <h1 className='project-item-title mt-2'>Golf Simulator Room</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card d-flex align-items-center justify-content-center'>
                  <div>
                    <div className='d-flex align-items-center justify-content-center' style={{ position: "relative" }}>
                      <div className='circle'>
                        <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/7.png" className='img-fluid'></img>
                      </div>
                      <span className='dot'></span>
                    </div>
                    <h1 className='project-item-title mt-2'>Digital Gaming Center</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card d-flex align-items-center justify-content-center'>
                  <div>
                    <div className='d-flex align-items-center justify-content-center' style={{ position: "relative" }}>
                      <div className='circle'>
                        <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/8.png" className='img-fluid'></img>
                      </div>
                      <span className='dot'></span>
                    </div>
                    <h1 className='project-item-title mt-2'>Basketball Court</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id = "gallery">
          <h1 className='section-header text-center'>Gallery</h1>
          <hr className='blue-hr' />
          <div className='text-center mt-5'>
            <OwlCarousel className={`owl-theme mt-5 ${selected == 'btn1' ? 'display-block' : 'display-none'}`} loop items={1} autoplay={true} autoplayTimeout={3000} dots={false} nav={false} responsive={responsive}>
              <div class='item d-flex align-items-center'>
                  <div>
                    <div>
                      <img src={require('./img/slider.webp')} className='w-100' alt="" />
                    </div>
                    <p className='mt-2' style={{ textAlign: "left", color: "#000", textDecoration: "none" }}>Living Room</p>
                  </div>
              </div>
              <div class='item d-flex align-items-center'>
                  <div>
                    <div>
                      <img src={require('./img/slider-2.webp')} className='w-100' alt="" />
                    </div>
                    <p className='mt-2' style={{ textAlign: "left", color: "#000", textDecoration: "none" }}>Living Room</p>
                  </div>
              </div>
              <div class='item d-flex align-items-center'>
                  <div>
                    <div>
                      <img src={require('./img/slider-3.webp')} className='w-100' alt="" />
                    </div>
                    <p className='mt-2' style={{ textAlign: "left", color: "#000", textDecoration: "none" }}>Living Room</p>
                  </div>
              </div>
              <div class='item d-flex align-items-center'>
                  <div>
                    <div>
                      <img src={require('./img/slider-4.webp')} className='w-100' alt="" />
                    </div>
                    <p className='mt-2' style={{ textAlign: "left", color: "#000", textDecoration: "none" }}>Exterior</p>
                  </div>
              </div>
            </OwlCarousel>
          </div>
        </section>
        <section className='luxurious-amenities'>
          <div className='container'>
            <h1 className='section-header text-center'>Luxurious Amenities</h1>
            <hr className='blue-hr' />
            <div className='row mt-5'>
              <div className='col-lg-3 mt-4'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/chemany.webp" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Modular Kitchen With Chimney & HOB</p>
                </div>
              </div>
              <div className='col-lg-3 mt-4'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/ac.svg" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>VRV Air Conditioning</p>
                </div>
              </div>
              <div className='col-lg-3 mt-4'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/window.svg" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Double Glazing Unit Windows</p>
                </div>
              </div>
              <div className='col-lg-3 mt-4'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/tiles.svg" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Italian Marble Flooring</p>
                </div>
              </div>
              <div className='col-lg-3 mt-4'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/swimming-pool.svg" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Swimming Pool</p>
                </div>
              </div>
              <div className='col-lg-3 mt-4'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/golf.svg" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Golf Course</p>
                </div>
              </div>
              <div className='col-lg-3 mt-4'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/gym.svg" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Gymnasium</p>
                </div>
              </div>
              <div className='col-lg-3 mt-4'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/clubhouse.svg" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Clubhouse</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id = "location">
          <div className='container'>
            <h1 className='section-header'>Premium Connectivity</h1>
            <hr className='blue-hr' style={{ margin: "unset" }} />
            <div className='row'>
              <div className='col-lg-6'>
                <p className='mt-3'><span className='location-tag'>Location:</span> Plot No. GH, 01 A, FF92+G6, near, Noida-Greater Noida Expy, Sector 146, Noida, Uttar Pradesh 201310</p>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <div>
                      <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/airport.svg" className='img-fluid' style={{ width: "30px" }} alt="" />
                    </div>
                    <div>
                      <p className='pt-2 px-2'>IGI Aiport</p>
                    </div>
                  </div>
                  <div>
                    <span className='distance-highlight'>55</span> Mins
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <div>
                      <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/metro.svg" className='img-fluid' style={{ width: "30px" }} alt="" />
                    </div>
                    <div>
                      <p className='pt-2 px-2'>Metro Station</p>
                    </div>
                  </div>
                  <div>
                    <span className='distance-highlight'>1</span> Mins
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <div>
                      <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/chowk.svg" className='img-fluid' style={{ width: "30px" }} alt="" />
                    </div>
                    <div>
                      <p className='pt-2 px-2'>Advant, Sector 142, Noida</p>
                    </div>
                  </div>
                  <div>
                    <span className='distance-highlight'>15</span> Mins
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <div>
                      <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/garden.svg" className='img-fluid' style={{ width: "30px" }} alt="" />
                    </div>
                    <div>
                      <p className='pt-2 px-2'>Akshardham Temple</p>
                    </div>
                  </div>
                  <div>
                    <span className='distance-highlight'>25</span> Mins
                  </div>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <div>
                      <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/expressway.svg" className='img-fluid' style={{ width: "30px" }} alt="" />
                    </div>
                    <div>
                      <p className='pt-2 px-2'>Anand Vihar ISBT</p>
                    </div>
                  </div>
                  <div>
                    <span className='distance-highlight'>35</span> Mins
                  </div>
                </div>
                <a href = "https://api.whatsapp.com/send?phone=15551234567"><button className='floor-plan-item-btn mt-3'>Get Location on Whatsapp</button></a>
              </div>
              <div className='col-lg-6 d-flex align-items-center justify-content-center pt-3'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.2582443822785!2d77.4484090751987!3d28.471768475752942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc207a3513f71%3A0xa938d6d7d3f206bb!2sGodrej%20Tropical%20Isle%2C%20Sector%20146%2C%20Noida!5e0!3m2!1sen!2sin!4v1712448128143!5m2!1sen!2sin" width="600" height="450" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
              </div>
            </div>
          </div>
        </section>
        <section id = "price" className='configurations-section' style={{ background: "rgba(240,240,240, 0.4)" }}>
          <div className='container'>
            <h1 className='text-center section-header'>Pricing</h1>
            <hr className='blue-hr' />
            <div className='mt-5' style={{ background: "#fff", padding: "5px" }}>
              <table class="table text-center m-0 table-bordered">
                <thead style={{ background: "#C3AA62", color: "#fff", borderTop: "2px solid #f9f9f9", fontWeight: 300 }}>
                  <tr>
                    <th scope="col">Type</th>
                    <th scope="col">Carptr Area</th>
                    <th scope="col">Exclusive Area</th>
                    <th scope="col">Super Area</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody className='bg-light'>
                  {pricing.map(price => {
                    return <><tr>
                    <th scope="row" rowSpan="2" style={{verticalAlign: "middle"}}>{price.Name}</th>
                    <td>{price.Carprt.sqmtr + " sqmt"}</td>
                    <td>{price.Exclusive.sqmtr + " sqmt"}</td>
                    <td>{price.Super.sqmtr + " sqmt"}</td>
                    <td rowSpan="2" style={{verticalAlign: "middle"}}><button className='floor-plan-item-btn' onClick={handleShow}>Check Price</button></td>
                  </tr>
                  <tr>
                  <td>{price.Carprt.sqft + " sqft"}</td>
                    <td>{price.Carprt.sqft + " sqft"}</td>
                    <td>{price.Carprt.sqft + " sqft"}</td>
                  </tr></>
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section className='site-visit'>
          <div style={{ background: "#C3AA62", height: "150px" }}></div>
          <div className='container'>
            <div className='site-visit-card'>
              <div className='row'>
                <div className='col-lg-7'>
                  <div className='card-form'>
                    <h1 className='section-header'>Schedule Free Site Visit</h1>
                    <form className='mt-5 site-visit-form'>
                      <div className='row'>
                        <div className='col-lg-6'>
                          <div class="group">
                            <input type="text" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Name*</label>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div class="group">
                            <input type="text" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Email*</label>
                          </div>
                        </div>
                        <div className='col-lg-6'>
                          <div class="group">
                            <input type="text" required />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Mobile Number*</label>
                          </div>
                        </div>
                      </div>
                      <button className='floor-plan-item-btn'>Submit</button>
                    </form>
                  </div>
                </div>
                <div className='col-lg-5 visit-img-container'>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='address'>
          Plot No. GH, 01 A, near, Noida-Greater Noida Expy, Sector 146, Noida, Badauli Bangar, Uttar Pradesh 201310
        </section>
        <footer>
          <div className='container'>
            <h6 className='mt-3'><a href = "https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/privacy.html">Disclaimer and Privacy Policy</a></h6>
          </div>
        </footer>
        <Modal show={show} onHide={handleClose} size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered>
          <Modal.Header style={{ border: "unset", display: "unset" }}>
            <h1 className='text-center section-header'>ENQUIRE NOW</h1>
            <p className='text-center'>Kindly share your detailss to know more about Godrej Tropical Isle</p>
          </Modal.Header>
          <Modal.Body style={{ border: "unset" }}>
            <form action="mailto:kendriyavihargrnoida@gmail.com" method="post" enctype="text/plain">
              <div className='row'>
                <div className='col-lg-6'>
                  <div class="form-group">
                    <span><i className='fa fa-user'></i></span>
                    <input class="form-field" type="text" placeholder="Name" name = "Name" required />
                  </div>
                </div>
                <div className='col-lg-6'>
                  <div class="form-group">
                    <span><i className='fa fa-phone'></i></span>
                    <input class="form-field" type="number" placeholder="Mobile" name = "mobile" required />
                  </div>
                </div>
                <div className='col-lg-12'>
                  <div class="form-group">
                    <span><i className='fa fa-envelope'></i></span>
                    <input class="form-field" type="text" placeholder="Email" name = "email" required />
                    {/* <span>@gmail.com</span> */}
                  </div>
                </div>
              </div>
              <Button className="floor-plan-item-btn w-100 py-3" type="submit">
                Save Changes
              </Button>
            </form>
          </Modal.Body>
        </Modal>
      </main>
    </div>
  );
}

export default Project;
