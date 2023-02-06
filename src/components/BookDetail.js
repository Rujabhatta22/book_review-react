import { Card, CardTitle, CardText, CardBody, ListGroup, ListGroupItem } from "reactstrap"

function BookDetail({ book }){
    
    // const book = books.find(b=> b._id === bookId)
    return(
        <div>
            <Card
                style={{
                    width: '18rem'
                }}>

                <CardBody>
                    <CardTitle tag="h5">
                        {book.title}
                    </CardTitle>
                    <CardText>
                        {book.author}
                    </CardText>
                </CardBody>
                <ListGroup>
                {book.reviews.map(review => {
                    return (
                        <ListGroupItem key={review._id}>
                            {review.body} by {review.reviewer}
                        </ListGroupItem>
                    )
                })}
            </ListGroup>
            
            </Card>
            
        </div>
    )

}
export default BookDetail