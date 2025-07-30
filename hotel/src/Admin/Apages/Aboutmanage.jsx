import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Anavbar from '../Acommon/Anavbar'
import axios from 'axios'

function Aboutmanage() {

     const [about, setabout] = useState([])

  useEffect(() => {
    fetchdata()
  },[])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/about")
    console.log(res.data)
    setabout(res.data)
  }

  // view data 
  const [aboutdata, setaboutdata] = useState({
    id: "",
    title: "",
    img: "",
    desc: ""
  })

  const viewdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/about/${id}`)
    console.log(res.data)
    setaboutdata(res.data)
  }

  //  delete data 

  const removedataa = async(id)=>{
    const res = await axios.delete(`http://localhost:3000/about/${id}`)
    console.log(res.data)
    fetchdata()
  }

  // update data 
  const [updateabout, setupdateabout] = useState(null)
  const [updatedata, setupdatedata] = useState({
    id: "",
    title: "",
    img: "",
    desc: ""
  })

  const openmodel = async (id) => {
    setupdateabout(id)
    setupdatedata(id)
  }

  const dataupdate = (e) => {
    setupdatedata({
      ...updatedata,
      [e.target.name]: e.target.value
    })
  }

  
       

  const update = async (e) => {
     e.preventDefault()

    const res = await axios.put(`http://localhost:3000/about/${updatedata.id}`, updatedata)
    console.log(res.data)
    fetchdata()
    setupdatedata({
      id: "",
      title: "",
      img: "",
      desc: ""
    })
    setupdateabout(null)
  }

  return (
    <div>
      <Aheader />
      <Anavbar title="About Manage" name="About Manage" />
      <table className="container table table-dark table-hover text-center ">
        <thead>
          <tr className='text-center'>
            <th scope="col">#Id</th>
            {/* <th scope="col">img</th> */}
            <th scope="col">title</th>
            <th scope="col">Description</th>
            <th scope='col'>Action</th>

          </tr>
        </thead>
        <tbody>
          {
            about && about.map((data) => {
              console.log(data)
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  {/* <td>{data.img}</td> */}
                  <td>{data.title}</td>
                  <td>{data.desc}</td>
                  <td>
                    <button className='btn btn-info ' onClick={()=> viewdata(data.id)}   data-bs-toggle="modal" data-bs-target="#exampleModal" >VIEW</button>
                    <button className='btn btn-success mx-2' onClick={()=> openmodel(data)} >EDIT</button>
                    <button className='btn btn-danger' onClick={()=> removedataa(data.id)}>DELETE</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

       {/* view data  */}
      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div className="blog-item">
              <div className="blog-img">
                <img src={aboutdata.img} className="img-fluid rounded-top w-100" style={{ height: "450px" }} alt="Image" />
              </div>
              <div className="blog-content rounded-bottom p-4">
                {/* <a href="#" className="h4 d-block mb-3">Rental Cars how to check driving fines?</a> */}
                <h5 className='mb-3'>{aboutdata.title}</h5>
                <p className="mb-3" style={{}}>{aboutdata.desc}</p>
                {/* <a href="#" className>Read More  <i className="fa fa-arrow-right" /></a> */}
              </div>
            </div>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
          </div>
        </div>
      </div>

      {/* update data  */}
      {
        updateabout && (
          <div className="col-md-6 container border bg-info bg-gradient my-5">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <h1 className='text-center text-white my-3'>Update Data</h1>
              <form className='p-3' >
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" name='title' onChange={dataupdate} value={updatedata && updatedata.title} className="form-control" id="title" placeholder="Your title" />
                      <label htmlFor="title">Your title</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input type="url" name='img' onChange={dataupdate} value={updatedata && updatedata.img} className="form-control" id="img" placeholder="Your img" />
                      <label htmlFor="img">Your img</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea className="form-control" name='desc' onChange={dataupdate} value={updatedata && updatedata.desc} placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} />
                      <label htmlFor="message">Description</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-success w-100 py-3" type="submit" onClick={update}>Update Data</button>
                  </div>
                  <div className="col-6">
                    <button className="btn btn-danger w-100 py-3 mb-3" type="cancel" onClick={() => setupdateabout(null)}>Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default Aboutmanage
