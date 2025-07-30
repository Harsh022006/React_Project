import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Anavbar from '../Acommon/Anavbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Aboutadd() {

 const redirect = useNavigate()

  const [form, setform] = useState({
    id: "",
    title: "",
    img: "",
    desc: ""
  })

  // form handling
  const getchange = (e) => {
    setform({
      ...form,
      id: new Date().getTime().toString(),
      [e.target.name]: e.target.value
    })
    console.log(form)
  }

  // submit form 

  const submitroom = async (e) => {
    e.preventDefault()

    const res = await axios.post("http://localhost:3000/about",form)
    console.log(res.data)
    redirect("/Aboutmanage")
    setform({
      id: "",
      title: "",
      img: "",
      desc: ""
    })
  }

  return (
    <div>
      <Aheader />
      <Anavbar title="Add About" name="Add About" />
      <div className="col-md-6 container border bg-info bg-gradient">
        <div className="wow fadeInUp" data-wow-delay="0.2s">
          <h1 className='text-center text-white my-3'>Send Your About Data</h1>
          <form className='p-3' onSubmit={submitroom} >
            <div className="row g-3">
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" name='title' onChange={getchange} value={form.title} className="form-control" id="title" placeholder="Your title" required />
                  <label htmlFor="title">Your title</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="url" name='img' onChange={getchange} value={form.img} className="form-control" id="img" placeholder="Your img" required />
                  <label htmlFor="image">Your img</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" name='desc' onChange={getchange} value={form.desc} placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} required />
                  <label htmlFor="message">Description</label>
                </div>
              </div>
              <div className="col-6">
                <button className="btn btn-success w-100 py-3" type="submit">Send Data</button>
              </div>
              <div className="col-6">
                <button className="btn btn-danger w-100 py-3 mb-3" type="cancel">Cancel</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Aboutadd
