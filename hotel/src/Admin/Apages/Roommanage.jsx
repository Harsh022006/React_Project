import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Anavbar from '../Acommon/Anavbar'
import axios from 'axios'

function Roommanage() {



  const [room, setroom] = useState([])

  useEffect(() => {
    fetchdata()
  },[])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/room")
    console.log(res.data)
    setroom(res.data)
  }

  // view data 
  const [roomdata, setroomdata] = useState({
    id: "",
    title: "",
    price: "",
    bed: "",
    Bath: "",
    img: "",
    desc: ""
  })

  const viewdata = async (id) => {
    const res = await axios.get(`http://localhost:3000/room/${id}`)
    console.log(res.data)
    setroomdata(res.data)
  }

  // Delete data 
  const removedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/room/${id}`)
    console.log(res.data)
    fetchdata()
  }


  // update data 
  const [updateroom, setupdateroom] = useState(null)
  const [updatedata, setupdatedata] = useState({
    id: "",
    title: "",
    price: "",
    bed: "",
    Bath: "",
    img: "",
    desc: ""
  })

  const openmodel = async (id) => {
    setupdateroom(id)
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

    const res = await axios.put(`http://localhost:3000/room/${updatedata.id}`, updatedata)
    console.log(res.data)
    fetchdata()
    setupdatedata({
      id: "",
      title: "",
      price: "",
      bed: "",
      Bath: "",
      img: "",
      desc: ""
    })
    setupdateroom(null)
  }

  return (
    <div>
      <Aheader />
      <Anavbar title="Room Manage" name="Room Manage" />
      <table className="container table table-dark table-hover text-center ">
        <thead>
          <tr className='text-center'>
            <th scope="col">#Id</th>
            {/* <th scope="col">img</th> */}
            <th scope="col">title</th>
            <th scope="col">price</th>
            <th scope="col">bed</th>
            <th scope="col">Bath</th>
            <th scope='col'>Action</th>

          </tr>
        </thead>
        <tbody>
          {
            room && room.map((data) => {
              console.log(data)
              return (
                <tr>
                  <th scope="row">{data.id}</th>
                  {/* <td>{data.img}</td> */}
                  <td>{data.title}</td>
                  <td>{data.price}</td>
                  <td>{data.bed}</td>
                  <td>{data.Bath}</td>
                  <td>
                    <button className='btn btn-info ' onClick={() => viewdata(data.id)} data-bs-toggle="modal" data-bs-target="#exampleModal" >VIEW</button>
                    <button className='btn btn-success mx-2' onClick={() => openmodel(data)}>EDIT</button>
                    <button className='btn btn-danger' onClick={() => removedata(data.id)} >DELETE</button>
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
                <img src={roomdata.img} className="img-fluid rounded-top w-100" style={{ height: "450px" }} alt="Image" />
              </div>
              <div className="blog-content rounded-bottom p-4">
                <div className="blog-date">{roomdata.price}</div>
                <div className="blog-comment my-3">
                  <div className="small"><span className="fa fa-bed text-primary" /><span className="ms-2">{roomdata.bed}</span></div>
                  <div className="small"><span className="fa fa-bath text-primary" /><span className="ms-2">{roomdata.Bath}</span></div>
                </div>
                {/* <a href="#" className="h4 d-block mb-3">Rental Cars how to check driving fines?</a> */}
                <h5 className='mb-3'>{roomdata.title}</h5>
                <p className="mb-3" style={{}}>{roomdata.desc}</p>
                {/* <a href="#" className>Read More  <i className="fa fa-arrow-right" /></a> */}
              </div>
            </div>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            {/* <button type="button" class="btn btn-primary">Save changes</button> */}
          </div>
        </div>
      </div>
          <div>
      {/* update data  */}
      {
        updateroom && (
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
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input type="text" name='price' onChange={dataupdate} value={updatedata && updatedata.price} className="form-control" id="price" placeholder="Your price" />
                      <label htmlFor="price">Your price</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input type="text" name='bed' onChange={dataupdate} value={updatedata && updatedata.bed} className="form-control" id="bed" placeholder="bed" />
                      <label htmlFor="bed">bed</label>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating">
                      <input type="text" name='Bath' onChange={dataupdate} value={updatedata && updatedata.Bath} className="form-control" id="Bath" placeholder="Bath" />
                      <label htmlFor="Bath">Bath</label>
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
                    <button className="btn btn-danger w-100 py-3 mb-3" type="cancel" onClick={() => setupdateroom(null)}>Cancel</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        )
      }
      </div>
    </div>
  )
}

export default Roommanage
