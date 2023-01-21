import React, { createContext, useContext } from 'react'
import { BookContext } from '../contetxs/BookContext'


const Navbar = () => {
const {books} = useContext(BookContext);
  return (
    <div className='navbar'>
        <h1>Reading List</h1>
        <p>You have {books.length} books to get thru...</p>
    </div>
  )
}

export default Navbar