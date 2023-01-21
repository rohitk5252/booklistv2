import React, {createContext, useState} from 'react'
import {v1 as uuid} from 'uuid';

export const BookContext = createContext();

const BookContextProvider = (props) => {
const [books, setBooks] = useState([
    {title: "Some Title", author: "Koi to hai", id:1},
    {title: "kjbjk Title", author: "veeve hai", id:2}
]);

const addBook = (title, author) => {
    setBooks([...books, {title, author, id: uuid()}]);
}

const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
}

  return (
    <BookContext.Provider value={{books, setBooks, deleteBook}}>
        {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;