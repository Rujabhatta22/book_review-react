import {useEffect, useState} from "react"
import { Link } from "react-router-dom"
import { Badge, Button, Form, FormGroup, Input, Label, ListGroup, ListGroupItem } from "reactstrap"
import bookService from "../services/bookService"

function Books({books, setBooks}){
    // const [books, setBooks]=useState([])
    const [title, setTitle]=useState([])
    const [author, setAuthor]=useState([])

    useEffect(()=> {
        bookService.getAll()
        .then(res => {
            setBooks(res.data)
            console.log(res)
        }).catch(err => console.log(err))

    }, [])

    const handleadd=(e)=>{
        e.preventDefault()
        bookService.create({title, author})
        .then(res=>{
            console.log(res.data)
            setBooks(books.concat( res.data))
            setAuthor('')
            setTitle('')

        }).catch(err=>console.log(err))
        

}
    
    return(
        <div>
            <h2>List of Books</h2>
            <ListGroup>
                {books.map(book=>{
                    return(
                        <ListGroupItem key={book._id}>
                            <b>{book.title} by {book.author}</b>
                            {' '}
                            <Badge pill color='warning'>
                                <Link to={`/books/${book._id}`}>
                                {book.reviews.length} reviews
                                </Link>
                            </Badge>
                        </ListGroupItem>
                    )
                })}
            </ListGroup>

            {/* // add book */}
            <br/>
            <Form>
                <FormGroup>
                    <Label for="title">
                        Title
                    </Label>
                    <Input
                        id="title"
                        name="title"
                        placeholder="enter book title"
                        type="text"
                        value={title}
                        onChange={(e)=> setTitle(e.target.value)}
                    />

                </FormGroup>
                {' '}
                <FormGroup >
                    <Label for="author">
                        Author
                    </Label>
                    <Input
                        id="author"
                        name="author"
                        placeholder="enter book author"
                        type="text"
                        value={author}
                        onChange={(e)=> setAuthor(e.target.value)}
                    />

                </FormGroup>
                {' '}
                <Button color="primary" onClick={handleadd}>
                    Submit
                </Button>
            </Form>
        </div>
    )
}
export default Books