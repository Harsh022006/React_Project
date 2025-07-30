import React, { useEffect, useState } from 'react'
import {
    MDBBtn,
    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBRow,
    MDBInput,
    MDBCheckbox,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';



function Login() {

    const redirect = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("Uid")) {
            redirect("/")
        }
    }, [])

    const [form, setform] = useState({
        email: "",
        password: ""
    })

    const getchange = (e) => {
        setform({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    }

    const getsubmit = async (e) => {
        e.preventDefault();

        try {

            const { email, password } = form

            if (!email.trim() || !password.trim()) {
                console.log("Email and password pls required..!")
                toast.error("Email and password pls required..!")
                return false
            }

            const res = await axios.get(`http://localhost:3000/user?email=${email}`)
            console.log(res.data)

            // user email match
            if (res.data.length === 0) {
                console.log("Email Does not macth...")
                toast.error("Email Does not macth...")
                return false
            }

            let user = res.data[0]

            if (user.password !== password) {
                console.log("password does not match...!")
                toast.error("password does not match...!")
                return false
            }

            if (user.status == "block") {
                console.log("Account has been block..!")
                toast.error("Account has been block..!")
                return false
            }

            localStorage.setItem("Uid", user.id)
            localStorage.setItem("Uname", user.name)
            redirect("/")
            console.log("Successfully login..!")
            toast.success("Successfully login..!")

        } catch (error) {
            console.log("API not Found...", error)
            toast.error("Api not Found..!")
        }
    }


    return (
        <div className='container'>
            <MDBContainer fluid>

                <div className="p-5 bg-image" style={{ backgroundImage: 'url(https://mdbootstrap.com/img/new/textures/full/171.jpg)', height: '300px' }}></div>

                <MDBCard className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '-100px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
                    <MDBCardBody className='p-5 text-center'>

                        <form action="" onSubmit={getsubmit}>

                            <h2 className="fw-bold mb-5">Sign up now</h2>

                            {/* <MDBRow>
            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
            </MDBCol>

            <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
            </MDBCol>
          </MDBRow> */}

                            <MDBInput value={form.email} name='email' onChange={getchange} wrapperClass='mb-4' label='Email' id='form1' type='email' />
                            <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4' label='Password' id='form1' type='password' />

                            {/* <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
          </div> */}




                            <MDBBtn className='w-100 mb-4' size='md'>Login</MDBBtn>

                            <h2 className="small fw-bold mt-4 pt-1 mb-4 my-5">Don't have an account? <Link to="/register" className="link-danger">Register</Link></h2>

                            <div className="text-center">

                                <p>or sign up with:</p>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='facebook-f' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='twitter' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='google' size="sm" />
                                </MDBBtn>

                                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                                    <MDBIcon fab icon='github' size="sm" />
                                </MDBBtn>

                            </div>
                        </form>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    )
}

export default Login
