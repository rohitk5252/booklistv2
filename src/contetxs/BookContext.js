import React, {createContext, useReducer, useEffect} from 'react'
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
const [books, dispatch] = useReducer(bookReducer , [], ()=>{
  // Third Argument returns a value that is Assigned as initial value for the state and the second argument i.e [], is ignored 
  const localData = localStorage.getItem('books');
  return localData ? JSON.parse(localData) : [];
});

//  Saving Data To Browser Local Storage 
useEffect(() => {
  localStorage.setItem('books', JSON.stringify(books))
}, [books]);

  return (
    <BookContext.Provider value={{books, dispatch}}>
        {props.children}
    </BookContext.Provider>
  )
}

export default BookContextProvider;