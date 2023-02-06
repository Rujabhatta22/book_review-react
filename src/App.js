import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { Link, Route,Routes, useMatch} from "react-router-dom";
import Books from "./components/Books";
import BookDetail from "./components/BookDetail";
import { useState } from "react";

function App() {
  const [books, setBooks]=useState([])
  const padding={
    padding:5
  }
const match = useMatch('/books/:id')

const book = match 
    ? books.find(b=>b._id === match.params.id)
    :null

  return (
    <div className="container">
      <h2>Book review App</h2>
 
        <div>
          <Link style={padding} to={'/login'}>login</Link>
          <Link style={padding} to={'/register'}>register</Link>
          <Link style={padding} to={'/'}>home</Link>
          <Link style={padding} to={'/books'}>books</Link>

        </div>

        <Routes>
          <Route path="/books/:id" element={<BookDetail book={book} />} />
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/books' element={<Books books={books} setBooks={setBooks}/>}/>


        </Routes>
     
      
  
    </div>
  );
}

export default App;
