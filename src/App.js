 import React from 'react'
 import Header from './Components/Header/Header'
import Login from './Login/Login';
import Book from './Components/Book/Book';
import {BrowserRouter, Routes, Route} from "react-router-dom";
 
 function App() {
   return (
     <div>
      <BrowserRouter>     

    <Header/>
    <Routes>
      {/* <Route path="/" element={<First /> }></Route> */}
      <Route path='/login' element = {<Login />}></Route>
      <Route path='/books' element = {<Book />}></Route>

      </Routes>
     
      </BrowserRouter>
      </div>
   );
 }
 
 export default App
 