import React, { useState, useEffect } from 'react'
import axios from "axios"
// import api_key from "../API/api"
import "./Book.css"

console.log("vikash")

function Book() {

  const [books, setBooks] = useState([]);

    useEffect(()=>{      
      axios.get("http://localhost:8080/getAllbooks")
      .then((result)=>{
        console.log(result.data.status)
        setBooks(result.data.allbooks)

      })
    },[])
 
   
  return (
    <div className='main'>
      {(books.length > 0) && books.map((book,index) => {

    <h1> Hello My DATA </h1>      
                
          return <div key={index}> 

            <h3>{(book.title.length > 23) ? book.title.slice(0, 23) : book.title}</h3> 
            <p>{(book.author.length > 15) ? book.author.slice(0, 15) : book.author}</p>
            

              <div className='imgbox'>
                <img
                  src={book.image}
                  alt={book.title}
                />
              </div>

            
          </div>

        
      
      })}
 
    </div>
  );
}

export default Book;