import { useParams, Link, useNavigate } from "react-router-dom"; 
import { useSelector } from "react-redux"; 

export default function BookDetails(){
    const {id} = useParams()  
     const book = useSelector(s => s.books.list.find(b => b.id ===id))

    if(!book){
        return (
            <div>
                <h1 className="title">Book Details</h1>
                <p className="muted">Book not found.</p>
                <Link to="/books" className="btn secondary">Back to Browse</Link>
            </div>
        )
    }
    return (
         <div>
      <h1 className="title">{book.title}</h1>
      <p className="subtitle muted">by {book.author}</p>

       {book.image && (
        <img 
          src={book.image} 
          alt={book.title} 
          style={{width:"100%",maxWidth:"400px",height:"auto",borderRadius:"10px",marginBottom:"16px",boxShadow:"0 4px 10px rgba(0,0,0,0.15)"
          }}
        />
      )}
      
           <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>

      <div style={{marginTop:"20px"}}>
        <Link to="/books" className="btn secondary">⬅ Back to Browse</Link>
            </div>
        </div>
    )
}