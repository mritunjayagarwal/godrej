import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  return (
    <div>
      <main>
        <nav className="navbar navbar-light bg-light p-1 fixed-top">
          <a className="navbar-brand ml-5" href="#">
            <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/gpl_logo.png" className='img-fluid' style={{ height: "40px" }} alt="" />
          </a>
        </nav>
        <section className='p-0 mt-5'>
          <OwlCarousel className='owl-theme' loop items={1} autoplay={true} autoplayTimeout={3000} dots={false} nav={false}>
            <div class='item d-flex align-items-center'>
              <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/slider/slide2.jpg" className='w-100' alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/slider/slide1.jpg" className='w-100' alt="" />
            </div>
          </OwlCarousel>
        </section>
        <section className="overview">
          <div className='container-fluid px-5'>
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
                <div className='text-white'>
                  <h1 className='section-header text-white'>Godrej 146 Overview</h1>
                  <hr className='white-hr mb-3' style={{ margin: "unset" }} />
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate esse tenetur itaque, totam amet reiciendis adipisci architecto veritatis iusto necessitatibus officia modi ipsum ipsam! Mollitia, dignissimos? Nisi, molestiae accusamus!</p>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus voluptate esse tenetur itaque, totam amet reiciendis adipisci architecto veritatis iusto necessitatibus officia modi ipsum ipsam! Mollitia, dignissimos? Nisi, molestiae accusamus!</p>
                </div>
              </div>
              <div className='col-lg-6'>
                <div className='gradient-bg h-100 d-flex align-items-center justify-content-center'>
                  <div className='d-flex text-center'>
                    <div className='px-3' style={{ flex: 1 }}>
                      <p><i className='fa fa-bed'></i></p>
                      <p className='overview-config-title'>Configuration</p>
                      <p className='overview-config-desc'>3/4 BHK</p>
                    </div>
                    <div className='px-3' style={{ flex: 1 }}>
                      <p><i className='fa fa-bed'></i></p>
                      <p className='overview-config-title'>Configuration</p>
                      <p className='overview-config-desc'>3/4 BHK</p>
                    </div>
                    <div className='px-3' style={{ flex: 1 }}>
                      <p><i className='fa fa-bed'></i></p>
                      <p className='overview-config-title'>Configuration</p>
                      <p className='overview-config-desc'>3/4 BHK</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <h1 className='section-header text-center'>Floor Plans</h1>
            <hr className='blue-hr' />
            <div className='row mt-5'>
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
                          <p className='m-0 floor-plan-item-desc'>3BHK</p>
                        </div>
                      </div>
                    </div>
                    <button className='floor-plan-item-btn mt-3'>Price Breakup</button>
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
                          <p className='m-0 floor-plan-item-desc'>3BHK</p>
                        </div>
                      </div>
                    </div>
                    <button className='floor-plan-item-btn mt-3'>Price Breakup</button>
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
                          <p className='m-0 floor-plan-item-desc'>3BHK</p>
                        </div>
                      </div>
                    </div>
                    <button className='floor-plan-item-btn mt-3'>Price Breakup</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='configurations-section'>
          <div className='container'>
            <h1 className='text-center section-header text-white'>Configurations</h1>
            <hr className='blue-hr' />
            <div className='mt-5' style={{ background: "#fff", padding: "5px" }}>
              <table class="table table-striped text-center m-0">
                <thead style={{ background: "#0a4f79", color: "#fff", borderTop: "2px solid #0a4f79", fontWeight: 300 }}>
                  <tr>
                    <th scope="col">Typology</th>
                    <th scope="col">Carpet Area (Sq m)</th>
                    <th scope="col">Exclusive Area (Sq m)</th>
                    <th scope="col">Check Price</th>
                  </tr>
                </thead>
                <tbody className='bg-light'>
                  <tr>
                    <th scope="row">3 BHK (Type-1)</th>
                    <td>90.84</td>
                    <td>21.38</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">4 BHK (Type-1)</th>
                    <td>90.84</td>
                    <td>21.38</td>
                    <td>@fat</td>
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
                        <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                      </div>
                      <span className='dot'></span>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='luxurious-amenities'>
          <div className='container'>
            <h1 className='section-header text-center'>Luxurious Amenities</h1>
            <hr className='blue-hr' />
            <div className='row mt-5'>
              <div className='col-lg-3'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/chemany.webp" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Modular Kitchen With Chimney & HOB</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/chemany.webp" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Modular Kitchen With Chimney & HOB</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/chemany.webp" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Modular Kitchen With Chimney & HOB</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/chemany.webp" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Modular Kitchen With Chimney & HOB</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/chemany.webp" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Modular Kitchen With Chimney & HOB</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/chemany.webp" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Modular Kitchen With Chimney & HOB</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/chemany.webp" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Modular Kitchen With Chimney & HOB</p>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='luxurious-amenities-item'>
                  <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/icons/chemany.webp" className='img-fluid svg-img mt-3' alt="" />
                  <p className='luxurious-amenities-item-desc'>Modular Kitchen With Chimney & HOB</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
          <h1 className='section-header'>Premium Connectivity</h1>
          <hr className='blue-hr' style = {{margin: "unset"}}/>
            <div className='row'>
              <div className='col-lg-6'>
                <p className='mt-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis molestiae corporis architecto nulla quibusdam quos fuga, recusandae quis ab animi nostrum, temporibus enim ducimus ullam molestias dolore vitae ipsam perspiciatis.</p>
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
                    55mins
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
                    55mins
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
                    55mins
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
                    55mins
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
                    55mins
                  </div>
                </div>
                <button className='floor-plan-item-btn mt-3'>Get Location on Whatsapp</button>
              </div>
              <div className='col-lg-6 d-flex align-items-center justify-content-center'>
                <img src="https://godrejhousing.in/Tropicalisle/Authorizedchannelpartner/images/map.webp" className='img-fluid' style = {{width: "80%"}} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className='address'>
          Plot No. GH, 01 A, near, Noida-Greater Noida Expy, Sector 146, Noida, Badauli Bangar, Uttar Pradesh 201310
        </section>
        <footer>
          <div className='container'>
            <h6 style={{ textDecoration: "underline" }}>Privacy Policy</h6>
            <h6 className='mt-3'>Disclaimer: </h6>
            <p>
              Godrej Properties Limited (Cin no. L74120MH1985PLC035308) (“Company’’)”) is developing a residential group housing project namely “Godrej Tropical Isle (“Project”), situated at Sector 146, Noida , which is registered with Uttar Pradesh Real Estate Regulatory Authority vide RERA Registration No. UPRERAPRJ303390 dated 08.06.2023 (website: www.up-rera.in ). The Project is being developed over a period of time, pursuant to building plan no. 2023/03/28/8690 dated 08.06.2023 valid for five years granted by Noida Authority for the Project and any further revisions and renewals in future. The terms of allotment/sale shall be subject to documents executed with the Company and approvals. Approvals are subject to change and revision.

              All information and visuals are an architect's impression. Nothing contained herein intends to constitute a legal offer and does not form part of any legally binding agreement. Recipients/ viewers are requested to verify all the details, specifications, including areas, amenities, services, payment plans and other relevant terms independently, have thorough understanding of the same and take appropriate advice prior to concluding any decision for buying in the Project. For more information, please visit – www.godrejproperties.com. Terms and conditions apply.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
