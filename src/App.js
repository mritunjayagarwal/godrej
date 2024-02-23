import './App.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function App() {
  return (
    <div>
      <main>
        <section className='p-0'>
          <OwlCarousel className='owl-theme' loop items={1} autoplay={true} autoplayTimeout={3000} dots={false} nav={false}>
            <div class='item d-flex align-items-center'>
              <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/slider/slide2.jpg" className='w-100' alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/slider/slide2.jpg" className='w-100' alt="" />
            </div>
            <div class='item d-flex align-items-center'>
              <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/slider/slide2.jpg" className='w-100' alt="" />
            </div>
          </OwlCarousel>
        </section>
        <section className="overview">
          <div className='container'>
            <div className="overview-wrapper">
              <div className='row pl-3'>
                <div className='col-lg-4 border-partial'>
                  <div className='border-partial-right-top'></div>
                  <div className='border-partial-right-bottom'></div>
                </div>
              </div>
              <div className='overview-absolute'>
                <div className='row d-flex align-items-center h-100'>
                  <div className='col-lg-3'>
                    Overview
                  </div>
                  <div className='col-lg-9'>
                    <div className='overview-main'>
                      <h1>Overview Bla Bla</h1>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ornare, justo ut finibus condimentum, augue est volutpat odio, sit amet dictum orci neque quis justo. Pellentesque eu tristique lorem. Mauris nulla tortor, egestas in nisl non, dignissim vulputate mi. Aenean ullamcorper consequat ipsum, non laoreet purus aliquam non. Donec ultrices nibh dui, eu maximus quam malesuada non. Ut cursus mauris ut facilisis tincidunt. Praesent consequat iaculis sapien eget fringilla.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='configurations-section'>
          <div className='container'>
            <h1 className='text-center'>Configurations</h1>
            <table class="table table-striped text-center mt-5">
              <thead style = {{background: "#0a4f79", color: "#fff", borderTop: "2px solid #0a4f79"}}>
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
        </section>
        <section>
          <div className='container'>
            <h1 className='text-center'>Project Details</h1>

            <div className='row'>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
              <div className='col-lg-3'>
                <div className='project-card'>
                  <div>
                    <div className='circle'>
                      <img src="https://www.godrejproperties.com/backoffice/data_content/projects/godrej_tropical_isle_2_noida/landing_page/images/highlights/1.png" className='img-fluid'></img>
                    </div>
                    <h1 className='project-item-title mt-2'>The Cabana Clubhouse</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
