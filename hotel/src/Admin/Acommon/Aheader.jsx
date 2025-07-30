import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Aheader() {

     const redirect = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("Aid")) {
            redirect("/Alogin")
        }
    })


    const logout = () => {
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        redirect("/Alogin")
         toast.success("Admin Logout..!")
    }

    return (
        <div>
            {/* Header Start */}
            <div className="container-fluid bg-dark px-0">
                <div className="row gx-0">
                    <div className="col-lg-3 bg-dark d-none d-lg-block">
                        <Link to="/" className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center">
                            <h1 className="m-0 text-primary text-uppercase">Hotelier</h1>
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
                                    <NavLink to="/dashboard" className="nav-item nav-link">Dashboard</NavLink>
                                    <div className="nav-item dropdown">
                                        <NavLink to="/managedata" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Manage-Data</NavLink>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <NavLink to="/aboutmanage" className="dropdown-item">manage About</NavLink>
                                            <NavLink to="/Roommanage" className="dropdown-item">manage Rooms</NavLink>
                                            <NavLink to="/servicemanage" className="dropdown-item">manage Services</NavLink>
                                            
                                            <NavLink to="/teammanage" className="dropdown-item">manage Team</NavLink>
                                            {/* <NavLink to="/test" className="dropdown-item">manage Testimonial</NavLink> */}
                                            {/* <NavLink to="*" className="dropdown-item">404 page</NavLink> */}
                                        </div>
                                    </div>

                                    <div className="nav-item dropdown">
                                        <NavLink to="/adddata"  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Add-Data</NavLink>
                                        <div className="dropdown-menu rounded-0 m-0">

                                            <NavLink to="/aboutadd" className="dropdown-item">Add About</NavLink>
                                            <NavLink to="/roomadd" className="dropdown-item">Add Room</NavLink>
                                            <NavLink to="/serviceadd" className="dropdown-item">Add Service</NavLink>
                                            <NavLink to="/teamadd" className="dropdown-item">Add Team</NavLink>
                                            {/* <NavLink to="/test" className="dropdown-item">Add Testimonial</NavLink> */}
                                            {/* <NavLink to="*" className="dropdown-item">404 page</NavLink> */}
                                        </div>
                                    </div>
                                    {/* <NavLink to="/contact" className="nav-item nav-link">Contact</NavLink> */}
                                </div>
                                {/* <a className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Premium Version<i className="fa fa-arrow-right ms-3" /></a> */}
                                {
                                        (()=>{
                                            if(localStorage.getItem("Aid")){
                                                return(
                                                    <>
                                                    <NavLink  className="btn btn-primary rounded-0 py-4 px-md-5 d-none d-lg-block">Hey..! &nbsp; {localStorage.getItem("Aname")}</NavLink>
                                                    </>
                                                )
                                            }
                                        })()
                                    }
                                     {
                                        (()=>{
                                            if(localStorage.getItem("Aid")){
                                                return(
                                                    <>
                                                        <NavLink onClick={logout} className="btn btn-danger p-4">logout</NavLink>
                                                    </>
                                                )
                                            }
                                            else{
                                                return(
                                                    <>
                                                        <NavLink to="/Alogin" className="nav-item nav-link">ALogin</NavLink>
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

export default Aheader
