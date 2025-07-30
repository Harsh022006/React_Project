import React, { useEffect, useState } from 'react'
import Header from '../Common/Header'
import Footer from '../Common/Footer'
import Navbar from '../Common/Navbar'
import axios from 'axios'
// import Footerslider from '../Common/Footerslider'

function Test() {

  const[test,settest] = useState([])

  useEffect(()=>{
    fetchdata()
  },[])

  const fetchdata = async ()=>{
    const res = await axios.get("http://localhost:3000/testimonial")
    console.log(res.data)
    settest(res.data)
  }

  return (
    <div>
      <Header />
      <Navbar title="Testimonial" name="Testimonial" />
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
       {/* Testimonial Start */}

        <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            {/* <h6 className="section-title text-center text-primary text-uppercase">Our Team</h6> */}
            <h1 className="mb-5"> Our <span className="text-primary text-uppercase">Clients & Their Review </span></h1>
          </div>

      <div className="container-xxl testimonial mt-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s" style={{ marginBottom: 90 }}>

        <div className="container">
          
          <div className=" testimonial-carousel py-5">
            {
              test && test.map((data)=>{
                console.log(data)
                return(
                  <div className="testimonial-item position-relative bg-white rounded overflow-hidden mb-5">
             
              <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded" src={data.img} style={{ width: 60, height: 60 }} />
                <div className="ps-3">
                  <h5 className="fw-bold mb-1">{data.name}</h5>
                  <small>{data.profession}</small>
                   <p>{data.review}</p>
                </div>
              </div>
              {/* <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" /> */}
            </div>
                )
              })
            }
            
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* <Footerslider /> */}

      <Footer />
    </div>
  )
}

export default Test
