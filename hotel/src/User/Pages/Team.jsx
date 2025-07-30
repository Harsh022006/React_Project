import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Navbar from '../Common/Navbar'
import Footer from '../Common/Footer'
import axios from 'axios'
import { data } from 'react-router-dom'

function Team() {

  const [team, setteam] = useState([])

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/team")
    console.log(res.data)
    setteam(res.data)
  }

  return (
    <div>
      <Header />
      <Navbar title="Our Team" name="Team" />

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
      {/* Team Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Staffs</span></h1>
          </div>
          <div className="row g-4">
            {
              team && team.map((data) => {
                console.log(data)
                return (
                  <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="rounded shadow overflow-hidden">
                      <div className="position-relative">
                        <img className="img-fluid" src={data.img} style={{height:"300px"}} alt />
                        <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                          <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-facebook-f" /></a>
                          <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-twitter" /></a>
                          <a className="btn btn-square btn-primary mx-1" href><i className="fab fa-instagram" /></a>
                        </div>
                      </div>
                      <div className="text-center p-4 mt-3">
                        <h5 className="fw-bold mb-0">{data.name}</h5>
                        <small>{data.manager}</small>
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


      <Footer />
    </div>
  )
}

export default Team
