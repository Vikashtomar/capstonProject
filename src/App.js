import React from "react";
import Header from "./Components/Header/Header";
import Login from "./Login/Login";
import Book from "./Components/Book/Book";
import About from "./Components/About/About";
import Bookshelf from "./Components/BookshelfFolder/Bookshelf";
import Dashboard from "./Components/Dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
   
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          
          <Route path="/login" element={<Login />}></Route>
          <Route path="/book" element={<Book />}></Route>

          <Route path="/dashboard" element={<Dashboard />}></Route>

        
         <Route path="/" element={<Bookshelf />}></Route>
         <Route path="/about" element={<About />}></Route>

        </Routes>
        
      </BrowserRouter>

    </div>
  );
}

export default App;
