import React, { useEffect, useState } from 'react';
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Editprofile() {

    const redirect = useNavigate()

    const [edited, setedited] = useState({
        id: "",
        name: "",
        email: "",
        password: "",
        status: ""
    })

    useEffect(() => {
        getdata()
    }, [])

    const getdata = async () => {
        const res = await axios.get(`http://localhost:3000/user/${localStorage.getItem("Uid")}`)
        console.log(res.data)
        setedited(res.data)
    }

    const getchange = (e) => {
        setedited({
            ...edited,
            [e.target.name]: e.target.value
        })
        console.log(edited)
    }


    const updatedata = async (e) => {
        e.preventDefault();

        try {

            if (!edited.email.trim() || !edited.password.trim() || !edited.name.trim()) {
                console.log("Pls field  required...!")
                toast.error("pls field  required")
                return false
            }

            const res = await axios.patch(`http://localhost:3000/user/${edited.id}`, edited)
            console.log(res.data)
            localStorage.setItem("Uname",res.data.name)
            toast.success("profile updated..!")
            redirect("/")
            setedited({
                id: "",
                name: "",
                email: "",
                password: "",
                status: ""
            })

        } catch (error) {
            console.log("APi data not Found")
            toast.error("APi data not found")
            return false
        }
    }

    return (
        <div>
            <MDBContainer fluid>

                <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
                    <MDBCardBody>
                        <MDBRow>
                            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                                <form action="" onSubmit={updatedata}>

                                    <div className='my-4'>
                                    <h3 classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Update Your Profile</h3>
                                    </div>
                                    <div className="d-flex flex-row align-items-center mb-4 ">
                                        <MDBIcon fas icon="user me-3" size='lg' />
                                        <MDBInput value={edited.name} onChange={getchange} name='name' label='Your Name' id='form1' type='text' className='w-100' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="envelope me-3" size='lg' />
                                        <MDBInput value={edited.email} onChange={getchange} name='email' label='Your Email' id='form2' type='email' />
                                    </div>

                                    <div className="d-flex flex-row align-items-center mb-4">
                                        <MDBIcon fas icon="lock me-3" size='lg' />
                                        <MDBInput value={edited.password} onChange={getchange} name='password' label='Password' id='form3' type='password' />
                                    </div>

                                    <MDBBtn className='mb-4' size='md'>Update profile</MDBBtn>

                                </form>
                            </MDBCol>

                            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                                <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
                            </MDBCol>

                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        </div>
    )
}

export default Editprofile
