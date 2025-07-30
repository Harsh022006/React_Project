import React from 'react'

function Footerslider() {
  return (
    <div>
       {/* Testimonial Start */}
      <div className="container-xxl testimonial mt-5 py-5 bg-dark wow zoomIn" data-wow-delay="0.1s" style={{ marginBottom: 90 }}>
        <div className="container">
          <div className=" testimonial-carousel py-5">
            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
             
              <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{ width: 60, height: 60 }} />
                <div className="ps-3">
                  <h6 className="fw-bold mb-1">Uttam</h6>
                  <small>Mentor</small>
                   <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                </div>
              </div>
              {/* <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" /> */}
            </div>
            <div className="testimonial-item position-relative bg-white rounded overflow-hidden my-3 ">
             <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{ width: 60, height: 60 }} />
                <div className="ps-3">
                  <h6 className="fw-bold mb-1">Ravindra</h6>
                  <small>Enterpreneur</small>
                   <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
              
                </div>
              </div>
              {/* <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" /> */}
            </div>
            <div className="testimonial-item position-relative bg-white rounded overflow-hidden">
              
              <div className="d-flex align-items-center">
                <img className="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{ width: 60, height: 60 }} />
                <div className="ps-3">
                  <h6 className="fw-bold mb-1">Dhaval</h6>
                  <small>Bussinessman</small>
                  <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos</p>
                </div>
              </div>
              {/* <i className="fa fa-quote-right fa-3x text-primary position-absolute end-0 bottom-0 me-4 mb-n1" /> */}
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
    </div>
  )
}

export default Footerslider
