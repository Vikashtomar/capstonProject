 import React from 'react'
 import "./head.css"
 
 function Header() {
   return (
        <div className="main">

     
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container maincnt">
    <a className="navbar-brand" href="/">BookShelf</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">

      <li className="nav-item  ">
          <a className="nav-link active light" aria-current="page" href="/">Home</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Dashboard</a>
        </li>

        <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>


      <li className="nav-item">
      <input class="btn btn-primary" type="submit" value="Login"/>
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
 