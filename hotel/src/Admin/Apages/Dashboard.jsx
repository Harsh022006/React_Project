import React, { useEffect, useState } from 'react'
import Aheader from '../Acommon/Aheader'
import Anavbar from '../Acommon/Anavbar'
import axios from 'axios'

function Dashboard() {

  const [user, setuser] = useState()

  useEffect(() => {
    fetchdata()
  }, [])

  const fetchdata = async () => {
    const res = await axios.get("http://localhost:3000/user")
    console.log(res.data)
    setuser(res.data)
  }

  return (
    <div>
      <Aheader />
      <Anavbar title="Dashboard" name="Dashboard" />
      <h1 className="text-center text-success">This is Dashboard Page...!</h1>



      <div className='mt-5 mb-2'>
        <h2 className='text-info text-center'>"Details of All Users"</h2>
      </div>
      <table className="container table table-dark table-hover text-center ">
        <thead>
          <tr className='text-center'>
            <th scope="col">#Id</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
        {
          user && user.map((data)=>{
            console.log(data)
            return(
               <tr>
                  <th scope="row">{data.id}</th>
                  <td>{data.name}</td>
                  <td>{data.status}</td>
                  </tr>
            )
          })
        }
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
