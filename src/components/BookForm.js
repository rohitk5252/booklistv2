import React, {useContext, useState} from 'react'
import { BookContext } from '../contetxs/BookContext'

const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_BOOK', book: {
          title, author
        }});
        setAuthor('');
        setTitle('');
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input type="text" placeholder='Book Title' required value={title} onChange={(e)=>setTitle(e.target.value)}/>
        <label>Author: </label>
        <input type="text" placeholder='Author' value={author} required onChange={(e)=>setAuthor(e.target.value)}/>
        <input type="submit" value="Submit"/>
    </form>
  )
}

export default BookForm