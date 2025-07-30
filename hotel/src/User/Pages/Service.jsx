import React, { useEffect, useState } from 'react'
import Footer from '../Common/Footer'
import Navbar from '../Common/Navbar'
import Header from '../Common/Header'
import Footerslider from '../Common/Footerslider'
import axios from 'axios'
import { data } from 'react-router-dom'

function Service() {

  const [service,setservice] = useState([])

  useEffect(()=>{
    fetchdata ()
  },[])

  const fetchdata = async()=>{
    const res = await axios.get("http://localhost:3000/service")
    console.log(res.data)
    setservice(res.data)
  }

  return (
    <div>
      <Header />
      <Navbar title=" Our Services" name="Service" />
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
      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Services</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Services</span></h1>
          </div>
          <div className="row g-4">
           {
            service && service.map((data)=>{
              console.log(data)
              return(
                 <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <a className="service-item rounded">
                <div className="p-1">
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                    <img src={data.img} style={{height:"200px"}} alt="" />
                  </div>
                </div>
                <h5 className="mb-4">{data.title}</h5>
                <p className="text-body mb-0">{data.desc}</p>
              </a>
            </div>
              )
            })
           }
          </div>
        </div>
      </div>
      {/* Service End */}
     <Footerslider />
      <Footer />
</div>

  )
}

export default Service
