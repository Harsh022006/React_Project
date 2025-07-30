import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './User/Pages/Home'
import Room from './User/Pages/Room'
import About from './User/Pages/About'
import Service from './User/Pages/Service'
import Contact from './User/Pages/Contact'
import Team from './User/Pages/Team'
import Test from './User/Pages/Test'
import Booking from './User/Pages/Booking'
import Error from './User/Pages/Error'
import Dashboard from './Admin/Apages/Dashboard'
import Roommanage from './Admin/Apages/Roommanage'
import Addroom from './Admin/Apages/Addroom'
import Serviceadd from './Admin/Apages/Serviceadd'
import Servicemanage from './Admin/Apages/Servicemanage'
import Aboutadd from './Admin/Apages/Aboutadd'
import Aboutmanage from './Admin/Apages/Aboutmanage'
import Teamadd from './Admin/Apages/Teamadd'
import Teammanage from './Admin/Apages/Teammanage'
import Alogin from './Admin/Apages/Alogin'
import { ToastContainer } from 'react-toastify';
import Login from './User/Pages/Login'
import Register from './User/Pages/Register'
import Editprofile from './User/Pages/Editprofile'

function App() {
  return (
    
    <div>
      <BrowserRouter>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Room" element={<Room />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/team" element={<Team />} />
        <Route path="/test" element={<Test />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="*" element={<Error />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/Roommanage" element={<Roommanage />} />
        <Route path="/roomadd" element={<Addroom />} />
        <Route path="/serviceadd" element={<Serviceadd />} />
        <Route path="/servicemanage" element={<Servicemanage />} />
        <Route path="/aboutadd" element={<Aboutadd />} />
        <Route path="/aboutmanage" element={<Aboutmanage />} />
        <Route path="/teamadd" element={<Teamadd />} />
        <Route path="/teammanage" element={<Teammanage />} />
        <Route path="/Alogin" element={<Alogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/edit" element={<Editprofile />} />
      </Routes>
      </BrowserRouter>
    </div>
     
  )
}

export default App
