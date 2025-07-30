import React, { useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Anavbar from '../Acommon/Anavbar'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function Teamadd() {

    const redirect = useNavigate()

  const [form, setform] = useState({
    id: "",
    name: "",
    img: "",
    manager: ""
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

    const res = await axios.post("http://localhost:3000/team",form)
    console.log(res.data)
    redirect("/Teammanage")
    setform({
      id: "",
      name: "",
      img: "",
      manager: ""
    })
  }

  return (
    <div>
      <Aheader />
      <Anavbar title="Team Add" name="Team Add" />

      <div className="col-md-6 container border bg-info bg-gradient">
        <div className="wow fadeInUp" data-wow-delay="0.2s">
          <h1 className='text-center text-white my-3'>Send Your Team Data</h1>
          <form className='p-3' onSubmit={submitroom} >
            <div className="row g-3">
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" name='name' onChange={getchange} value={form.name} className="form-control" id="name" placeholder="Your name" required />
                  <label htmlFor="name"> name:</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="url" name='img' onChange={getchange} value={form.img} className="form-control" id="img" placeholder="Your img" required />
                  <label htmlFor="img"> img:</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" name='manager' onChange={getchange} value={form.manager} className="form-control" id="manager" placeholder="Your manager" required />
                  <label htmlFor="manager">management: </label>
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

export default Teamadd
