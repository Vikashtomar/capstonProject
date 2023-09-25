 import React from 'react'
 import { Link } from 'react-router-dom'
 import "./head.css"
 import axios from "axios"
//  import Book from '../Book/Book'
 
 function Header() {


  function sendData(){
        axios.post("http://localhost:8000/sending")
        .then((result) =>{
            console.log(result.data)
        })
  }


   return (
        <div className="main">

     
       <nav className="navbar navbar-expand-lg navbar-light bg-light wi">
  <div className="container maincnt">
    <Link className="navbar-brand" to="/">BookShelf</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

   

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <button onClick={sendData}>send data</button>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/book">Book</Link>
        </li>
    
    
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/dashboard">Dashboard</Link>
        </li>

        <form className="d-flex ">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success  " type="submit">Search</button>
      </form>


      <li className="nav-item log">
      <Link class="btn btn-primary" type="submit" value="Login" to="/login" > Login </Link>
        </li>


      </ul>


    </div>
  </div>
</nav>




    <head />
    </div>

    
   )
 }
 
 export default Header
 