import React, { useEffect, useState } from 'react'
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function Alogin() {

    const redirect = useNavigate()

    useEffect(()=>{
        if(localStorage.getItem("Aid")){
            redirect("/Dashboard")
        }
    },[])


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
        // e.preventDefault();
        e.preventDefault();

        try {
            const { email, password } = form

            // if (email == "" || password) {
            //     console.log("Pls field required..!")
            //     return false
            // }

            if (!email.trim() || !password.trim()) {
                console.log("Pls field required...!")
                toast.error("Pls field required...!")
                return false
            }

            // email id match
            const res = await axios.get(`http://localhost:3000/admin?email=${email}`)
            console.log(res.data)
            if(res.data.length === 0){
                console.log("Email id Does not match...!")
                 toast.error("Email id Does not match...!")
                return false
            }

            let admin = res.data[0]
            // password
            if(admin.password !== password){
                console.log("Password does not match..!")
                toast.error("Password Does not match...!")
                return false
            }

            localStorage.setItem("Aid",admin.id)
            localStorage.setItem("Aname",admin.name)
            redirect("/Dashboard")
            toast.success("Login successfully...")
            console.log("Login success...!")


        } catch (error) {
            console.log("APi data not found..", error)
        }
    }

  return (
    <div className='container'>
       <MDBContainer fluid className="p-3 my-5 h-custom">

      <MDBRow>

        

        <MDBCol col='10' md='6'>
          <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid" alt="Sample image" />
        </MDBCol>

        <MDBCol col='4' md='6'>

          <div className="d-flex flex-row align-items-center justify-content-center">

            <p className="lead fw-normal mb-0 me-3">Sign in with</p>

            <MDBBtn floating size='md' tag='a' className='me-2'>
              <MDBIcon fab icon='facebook-f' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='twitter' />
            </MDBBtn>

            <MDBBtn floating size='md' tag='a'  className='me-2'>
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>

          </div>
            <form action="" onSubmit={getsubmit} >
          <div className="divider d-flex align-items-center my-4">
            <h4 className="text-center fw-bold mx-3">OR</h4>
          </div>

          <div>
             <h2 className="fw-bold mb-2 text-uppercase ms-5">Admin Login Form</h2>
             <p className="mb-5 ms-5 text-dark">Please Enter Your Login Details..!</p>
          </div>

          <MDBInput value={form.email} name='email' onChange={getchange} wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg"/>
          <MDBInput value={form.password} name='password' onChange={getchange} wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"/>

          <div className="d-flex justify-content-between mb-4">
            <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
            <a href="!#">Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className="mb-0 px-5" size='lg'>Login</MDBBtn>
            <h2 className="small fw-bold mt-4 pt-1 mb-4 my-5">Don't have an account? <Link href="#!" className="link-danger">Register</Link></h2>
          </div>

          </form>

        </MDBCol>

     
      </MDBRow>

       <div className="  py-3 px-4  bg-primary">

        {/* <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div> */}

        <div className=''> 

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='twitter' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='google' size="md"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='mx-3' style={{ color: 'white'  }}>
            <MDBIcon fab icon='linkedin-in' size="md"/>
          </MDBBtn>

        </div>

      </div>

    </MDBContainer>
    </div>
  )
}

export default Alogin
