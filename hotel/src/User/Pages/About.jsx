import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Navbar from '../Common/Navbar'
import axios from 'axios'

function About() {

  const [about, setabout] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/about")
    console.log(res.data)
    setabout(res.data)
  }

  return (
    <div>
      <Header />
      <Navbar title="About Us" name="about" />
      <div>
        {/* Booking Start */}
        {/* <div className="container-fluid booking pb-5 wow fadeIn" data-wow-delay="0.1s">
          <div className="container">
            <div className="bg-white shadow" style={{ padding: 35 }}>
              <div className="row g-2">
                <div className="col-md-10">
                  <div className="row g-2">
                    <div className="col-md-3">
                      <div className="date" id="date1" data-target-input="nearest">
                        <input type="text" className="form-control datetimepicker-input" placeholder="Check in" data-target="#date1" data-toggle="datetimepicker" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="date" id="date2" data-target-input="nearest">
                        <input type="text" className="form-control datetimepicker-input" placeholder="Check out" data-target="#date2" data-toggle="datetimepicker" />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <select className="form-select">
                        <option selected>Adult</option>
                        <option value={1}>Adult 1</option>
                        <option value={2}>Adult 2</option>
                        <option value={3}>Adult 3</option>
                      </select>
                    </div>
                    <div className="col-md-3">
                      <select className="form-select">
                        <option selected>Child</option>
                        <option value={1}>Child 1</option>
                        <option value={2}>Child 2</option>
                        <option value={3}>Child 3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary w-100">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Booking End */}
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h6 className="section-title text-start text-primary text-uppercase">About Us</h6>
                <h1 className="mb-4">Welcome to <span className="text-primary text-uppercase">Hotelier</span></h1>
                <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                <div className="row g-3 pb-4">
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-hotel fa-2x text-primary mb-2" />
                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                        <p className="mb-0">Rooms</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-users-cog fa-2x text-primary mb-2" />
                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                        <p className="mb-0">Staffs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-users fa-2x text-primary mb-2" />
                        <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                        <p className="mb-0">Clients</p>
                      </div>
                    </div>
                  </div>
                </div>
                <a className="btn btn-primary py-3 px-5 mt-2" href>Explore More</a>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.1s" src="img/about-1.jpg" style={{ marginTop: '25%' }} />
                  </div>
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.3s" src="img/about-2.jpg" />
                  </div>
                  <div className="col-6 text-end">
                    <img className="img-fluid rounded w-50 wow zoomIn" data-wow-delay="0.5s" src="img/about-3.jpg" />
                  </div>
                  <div className="col-6 text-start">
                    <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.7s" src="img/about-4.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
              <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase"> Hotel</span></h1>
            </div>
            <div className="row g-4">
              {
                about && about.map((data) => {
                  console.log(data)
                  return (
                    <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                      <div className="rounded shadow overflow-hidden">
                        <div className="position-relative">
                          <img className="img-fluid" src={data.img} style={{height:"400px"}} alt />
                          <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                            <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                            <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                            <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                          </div>
                        </div>
                        <div className="text-center p-4 mt-3">
                          <h3 className="fw-bold mb-0">{data.title}</h3>
                          <h6>{data.desc}</h6>
                        </div>
                      </div>
                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
        {/* Team End */}
      </div>


      <Footer />
    </div>
  )
}

export default About
