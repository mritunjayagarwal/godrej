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
        <section className='configurations-section'>
          <div className='container'>
            <h1 className='text-center section-header text-white'>Configurations</h1>
            <hr className='blue-hr'/>
            <div className='mt-5' style = {{background: "#fff", padding: "5px"}}>
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
            <hr className='blue-hr'/>
            <div className='row'>
              <div className='col-lg-3'>
                <div className='project-card d-flex align-items-center justify-content-center'>
                  <div>
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
                    <div className='d-flex align-items-center justify-content-center' style = {{position: "relative"}}>
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
        <section>
          <div className='row'>
            <div className='col-lg-6 px-5'>
              <div className='container' style={{ position: "relative" }}>
                <div className='row'>
                  <div className='col-lg-4 border-partial' style={{ height: "600px" }}>
                    <div className='border-partial-right-top'></div>
                    <div className='border-partial-right-bottom'></div>
                  </div>
                </div>
                <div className='overview-absolute py-5 d-flex align-items-center pl-3'>
                  <div className='container'>
                    <h1 className='section-header'>EXPERIENCE ISLAND LIVING, ALONG THE EXPRESSWAY</h1>
                    <hr className = "blue-hr" style = {{margin: "unset"}}/>
                    <p className='mt-3 map-para'>Come closer to the world of convenience and the city-life as you reside in the marquee development, right by the expressway. Escape to your tropical island that connects you to endless opportunities with prime commercial hubs, eminent schools, recreational avenues as well as 2 International airports in proximity.</p>
                    <ul style = {{listStyleType: "none", "margin-left": "-40px", "color": "#707070"}}>
                      <li><i className='fa fa-map-marker'></i> Cambridge School – 12 Mins</li>
                      <li><i className='fa fa-map-marker'></i> Apollo Cradle & Apollo Spectra – 10 Mins</li>
                      <li><i className='fa fa-map-marker'></i> Uptown Square – 11 Mins</li>
                      <li><i className='fa fa-map-marker'></i> South Extension Market - 25 Mins</li>
                      <li><i className='fa fa-map-marker'></i> IGI Airport – 55 Mins</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-lg-6'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.79425683685!2d77.89761138662266!3d27.176150424581074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1708728849323!5m2!1sen!2sin" style={{ "border": 0, height: "100%", width: "100%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
