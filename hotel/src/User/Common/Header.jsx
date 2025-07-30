import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Header() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Uid")){
            redirect("/login")
        }
    })

    const logout=()=>{
        localStorage.removeItem("Uid")
        localStorage.removeItem("Uname")
        redirect("/login")
        toast.success("user logout successfully")
    }

    return (
        <div>
            {/* Header Start */}
            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <Link to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 text-primary text-uppercase"><i>Hotelier</i></h1>
                        </Link>
                    </div>
                    <div className="col-lg-9">
                        <div className="row gx-0 bg-white d-none d-lg-flex">
                            <div className="col-lg-7 px-5 text-start">
                                <div className="h-100 d-inline-flex align-items-center py-2 me-4">
                                    <i className="fa fa-envelope text-primary me-2" />
                                    <p className="mb-0">hotelier@.com</p>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2">
                                    <i className="fa fa-phone-alt text-primary me-2" />
                                    <p className="mb-0">+012 345 6789</p>
                                </div>
                            </div>
                            <div className="col-lg-5 px-5 text-end">
                                <div className="d-inline-flex align-items-center py-2">
                                    <a className="me-3" href><i className="fab fa-facebook-f" /></a>
                                    <a className="me-3" href><i className="fab fa-twitter" /></a>
                                    <a className="me-3" href><i className="fab fa-linkedin-in" /></a>
                                    <a className="me-3" href><i className="fab fa-instagram" /></a>
                                    <a className="me-3" href><i className="fab fa-youtube" /></a>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-3 p-lg-0">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav mr-auto py-0">
                                    <NavLink to="/" className="nav-item nav-link">Home</NavLink>
                                    <NavLink to="/about" className="nav-item nav-link">About</NavLink>
                                    <NavLink to="/service" className="nav-item nav-link">Services</NavLink>
                                    <NavLink to="/Room" className="nav-item nav-link">Rooms</NavLink>
                                    <div className="nav-item dropdown">
                                       <NavLink to="pages" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</NavLink>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <NavLink to="/booking" className="dropdown-item">Booking</NavLink>
                                            <NavLink to="/team" className="dropdown-item">Our Team</NavLink>
                                            <NavLink to="/test" className="dropdown-item">Testimonial</NavLink>
                                            <NavLink to="*" className="dropdown-item">404 page</NavLink>
                                        </div>
                                    </div>
                                    <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink>
                                </div>
                                {/* <a className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Premium Version<i className="fa fa-arrow-right ms-3" /></a> */}
                                 {(()=>{
                                        if(localStorage.getItem("Uid")){
                                            return(
                                                <>
                                                     <NavLink to="/edit" className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Hey..! &nbsp; {localStorage.getItem("Uname")}</NavLink>
                                                </>
                                            )
                                        }
                                    })()}
                                    {
                                        (()=>{
                                            if(localStorage.getItem("Uid")){
                                                return(
                                                    <>
                                                         <NavLink onClick={logout} className="btn btn-danger p-4">Logout</NavLink>
                                                    </>
                                                )
                                            }
                                            else{
                                                return(
                                                    <>
                                                         <NavLink to="/login" className="nav-item nav-link">login</NavLink>
                                                    </>
                                                )
                                            }
                                        })()
                                    }
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
            {/* Header End */}
        </div>

    )
}

export default Header
