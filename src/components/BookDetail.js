import { useParams } from "react-router-dom"

function BookDetail({ books }){
    const bookId=useParams().id
    
    const book = books.find(b=> b._id === bookId)
    return(
        <div>
            <h2>
                Book details components
            </h2>
            <p>{book.title}</p>
        </div>
    )

}
export default BookDetail