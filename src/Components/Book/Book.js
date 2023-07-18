import React, { useEffect, useState } from 'react';
import axios from "axios"


// URL  https://openlibrary.org/search.json?author=tolkien&sort=new
function Book() {
    const [books, setBooks] = useState([]);

    
    useEffect(() => {
          axios.get("https://openlibrary.org/search.json?author=tolkien&sort=new")
         .then((res) => {
          setBooks(res.data.docs)
         })
         
    
    },[])
    


  return (
<div>{
  
  books.map((book, index)=>{
  return(  <div key = {index}>
              <h3>{book.title}</h3>
              <p>{book.author_name && book.author_name.join(', ')}</p>
              {book.cover_i && (<img src={`https://covers.openlibrary.org/b/id${book.cover_i}-L.jpg`}  alt={book.title}
                />)}
              </div>)
  })
      
              }
    </div>
  );
}

export default Book;
