import './App.css';
import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import projects from './data/projects';

const Home = () => {
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
        <>
            <main>
                <nav class="navbar navbar-expand-lg m-0 fixed-top border bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/" style={{ color: "#000", fontWeight: "600" }}>GODREJ PROPERTIES</a>
                        <button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarText"
                            aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <i class="fa fa-bars"></i>
                        </button>
                        <div class="collapse navbar-collapse text-white" id="navbarText">
                            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
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
                <section>
                    <div className='container'>
                        <h1 className='text-center section-header'>Hot Project</h1>
                        <hr className='hr blue-hr' />
                        <div className='row mt-5 d-flex justify-content-center'>
                            <div className='col-lg-4 mb-5'>
                                <div className='property-item'>
                                    <div>
                                        <img src="https://godrejhomez.com/images/New-folder/TROPICAL-ISLE.webp" className='img-fluid' />
                                    </div>
                                    <div className='property-item-body'>
                                        <div className='pt-3'>
                                            <h1 className="property-name">GODREJ TROPICAL ISLE</h1>
                                            <h2 className="property-type">3 & 4 BHK ULTRA LUXURY APARTMENTS</h2>
                                        </div>
                                        <hr style={{ width: "100%" }} />
                                        <div className='py-3'>
                                            <h1 className="property-price">₹ 3.20 CR* ONWARDS</h1>
                                            <h2 className="property-location">SECTOR 146, NOIDA</h2>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='pr-2' style={{ flex: 1 }}>
                                                <button className='btn-block floor-plan-item-btn py-2' onClick={handleShow}>Interested</button>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <Link to="/project/Namu" className='text-center btn-block floor-plan-item-btn py-2'>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <div className='property-item'>
                                    <div>
                                        <img src="https://godrejhomez.com/images/New-folder/TROPICAL-ISLE.webp" className='img-fluid' />
                                    </div>
                                    <div className='property-item-body'>
                                        <div className='pt-3'>
                                            <h1 className="property-name">GODREJ TROPICAL ISLE</h1>
                                            <h2 className="property-type">3 & 4 BHK ULTRA LUXURY APARTMENTS</h2>
                                        </div>
                                        <hr style={{ width: "100%" }} />
                                        <div className='py-3'>
                                            <h1 className="property-price">₹ 3.20 CR* ONWARDS</h1>
                                            <h2 className="property-location">SECTOR 146, NOIDA</h2>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='pr-2' style={{ flex: 1 }}>
                                                <button className='btn-block floor-plan-item-btn py-2' onClick={handleShow}>Interested</button>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <Link to="/project/Namu" className='text-center btn-block floor-plan-item-btn py-2'>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <div className='property-item'>
                                    <div>
                                        <img src="https://godrejhomez.com/images/New-folder/TROPICAL-ISLE.webp" className='img-fluid' />
                                    </div>
                                    <div className='property-item-body'>
                                        <div className='pt-3'>
                                            <h1 className="property-name">GODREJ TROPICAL ISLE</h1>
                                            <h2 className="property-type">3 & 4 BHK ULTRA LUXURY APARTMENTS</h2>
                                        </div>
                                        <hr style={{ width: "100%" }} />
                                        <div className='py-3'>
                                            <h1 className="property-price">₹ 3.20 CR* ONWARDS</h1>
                                            <h2 className="property-location">SECTOR 146, NOIDA</h2>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='pr-2' style={{ flex: 1 }}>
                                                <button className='btn-block floor-plan-item-btn py-2' onClick={handleShow}>Interested</button>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <Link to="/project/Namu" className='text-center btn-block floor-plan-item-btn py-2'>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <div className='property-item'>
                                    <div>
                                        <img src="https://godrejhomez.com/images/New-folder/TROPICAL-ISLE.webp" className='img-fluid' />
                                    </div>
                                    <div className='property-item-body'>
                                        <div className='pt-3'>
                                            <h1 className="property-name">GODREJ TROPICAL ISLE</h1>
                                            <h2 className="property-type">3 & 4 BHK ULTRA LUXURY APARTMENTS</h2>
                                        </div>
                                        <hr style={{ width: "100%" }} />
                                        <div className='py-3'>
                                            <h1 className="property-price">₹ 3.20 CR* ONWARDS</h1>
                                            <h2 className="property-location">SECTOR 146, NOIDA</h2>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='pr-2' style={{ flex: 1 }}>
                                                <button className='btn-block floor-plan-item-btn py-2' onClick={handleShow}>Interested</button>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <Link to="/project/Namu" className='text-center btn-block floor-plan-item-btn py-2'>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4 mb-5'>
                                <div className='property-item'>
                                    <div>
                                        <img src="https://godrejhomez.com/images/New-folder/TROPICAL-ISLE.webp" className='img-fluid' />
                                    </div>
                                    <div className='property-item-body'>
                                        <div className='pt-3'>
                                            <h1 className="property-name">GODREJ TROPICAL ISLE</h1>
                                            <h2 className="property-type">3 & 4 BHK ULTRA LUXURY APARTMENTS</h2>
                                        </div>
                                        <hr style={{ width: "100%" }} />
                                        <div className='py-3'>
                                            <h1 className="property-price">₹ 3.20 CR* ONWARDS</h1>
                                            <h2 className="property-location">SECTOR 146, NOIDA</h2>
                                        </div>
                                        <div className='d-flex'>
                                            <div className='pr-2' style={{ flex: 1 }}>
                                                <button className='btn-block floor-plan-item-btn py-2' onClick={handleShow}>Interested</button>
                                            </div>
                                            <div style={{ flex: 1 }}>
                                                <Link to="/project/Namu" className='text-center btn-block floor-plan-item-btn py-2'>View More</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {
                    projects.map(project => {
                        return <section>
                            <div className='container'>
                                <h1 className='text-center section-header'>{project.City}</h1>
                                <hr className='hr blue-hr' />
                                <div className='row mt-5 d-flex justify-content-center'>
                                    {
                                        project.Projects.map(projectt => {
                                            return <div className='col-lg-4 mb-5'>
                                            <div className='property-item'>
                                                <div>
                                                    <img src="https://godrejhomez.com/images/New-folder/TROPICAL-ISLE.webp" className='img-fluid' />
                                                </div>
                                                <div className='property-item-body'>
                                                    <div className='pt-3'>
                                                        <h1 className="property-name">{projectt.Name}</h1>
                                                        <h2 className="property-type">{projectt.Type}</h2>
                                                    </div>
                                                    <hr style={{ width: "100%" }} />
                                                    <div className='py-3'>
                                                        <h1 className="property-price">{projectt.Price}</h1>
                                                        <h2 className="property-location">{projectt.Location}</h2>
                                                    </div>
                                                    <div className='d-flex'>
                                                        <div className='pr-2' style={{ flex: 1 }}>
                                                            <button className='btn-block floor-plan-item-btn py-2' onClick={handleShow}>Interested</button>
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <Link to={`/${project.City}/project/${projectt.Id}/${projectt.Name}`} className='text-center btn-block floor-plan-item-btn py-2'>View More</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        })
                                    }
                                </div>
                            </div>
                        </section>
                    })
                }
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
                                        <input class="form-field" type="text" placeholder="Name" name="Name" required />
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div class="form-group">
                                        <span><i className='fa fa-phone'></i></span>
                                        <input class="form-field" type="number" placeholder="Mobile" name="mobile" required />
                                    </div>
                                </div>
                                <div className='col-lg-12'>
                                    <div class="form-group">
                                        <span><i className='fa fa-envelope'></i></span>
                                        <input class="form-field" type="text" placeholder="Email" name="email" required />
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
        </>
    )
}

export default Home