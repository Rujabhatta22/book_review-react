function BookDetail({ book }){
    
    // const book = books.find(b=> b._id === bookId)
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