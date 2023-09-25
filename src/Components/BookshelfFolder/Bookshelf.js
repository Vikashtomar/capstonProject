import React from 'react'
import mainimg from '../images/book1.avif'
import './Bookshelf.css'

function Bookshelf() {

  return (

   <>
   <div className='bookshelf'>

  <h1>
    
"Welcome to our captivating bookshelf, where imagination knows no bounds. Discover a world of diverse stories that will inspire, entertain, and leave you spellbound."
  </h1>
  <div className="imgbox">
    <img src={mainimg} alt="" />
  </div>
   </div>
   </>
  )
}

export default Bookshelf
