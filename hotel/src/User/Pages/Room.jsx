import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Navbar from '../Common/Navbar'
import Footerslider from '../Common/Footerslider'
import axios from 'axios'
import { data } from 'react-router-dom'

function Room() {

  const[room,setroom]=useState([])

  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata = async ()=>{
    const res = await axios.get("http://localhost:3000/room")
    console.log(res.data)
    setroom(res.data)
  }

  return (
    <div>
      <Header />
      <Navbar title="Luxurious Rooms" name="Room" />
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
      {/* Room Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">Our Rooms</h6>
            <h1 className="mb-5">Explore Our <span className="text-primary text-uppercase">Rooms</span></h1>
          </div>
          <div className="row g-4">
           {
            room && room.map((data)=>{
              console.log(data)
              return(
                 <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="room-item shadow rounded overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={data.img} style={{height:"330px"}} alt />
                  <small className="position-absolute start-0 top-100 translate-middle-y bg-primary text-white rounded py-1 px-3 ms-4">{data.price}</small>
                </div>
                <div className="p-4 mt-2">
                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{data.title}</h5>
                    <div className="ps-2">
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                      <small className="fa fa-star text-primary" />
                    </div>
                  </div>
                  <div className="d-flex mb-3">
                    <small className="border-end me-3 pe-3"><i className="fa fa-bed text-primary me-2" />{data.bed}</small>
                    <small className="border-end me-3 pe-3"><i className="fa fa-bath text-primary me-2" />{data.Bath}</small>
                    <small><i className="fa fa-wifi text-primary me-2" />Wifi</small>
                  </div>
                  <p className="text-body mb-3">{data.desc}</p>
                  <div className="d-flex justify-content-between">
                    <a className="btn btn-sm btn-primary rounded py-2 px-4" href>View Detail</a>
                    <a className="btn btn-sm btn-dark rounded py-2 px-4" href>Book Now</a>
                  </div>
                </div>
              </div>
            </div>
              )
            })
           }
          </div>
        </div>
      </div>
      {/* Room End */}
      <Footerslider />
    <Footer />
    </div>


  )
}

export default Room
