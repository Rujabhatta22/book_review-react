import { useParams } from "react-router-dom"

function BookDetail({books}){
    const bookId=useParams('id')
    return(
        <div>
            <h2>
                Book details components
            </h2>
        </div>
    )

}
export default BookDetail