import {Link} from 'react-router-dom'

export default function BookCard({ book }){
    return (
        <div className="card">
           {book.image && (
             <Link to={`/books/${book.id}`}>
            <img src={book.image}
            alt={book.title}
            style={{width:"100%", height:"300px", objectFit:"cover",borderRadius:"8px",marginBottom:"8px"}} />
            </Link>
           )}
            <h3 style={{margin:'0 0 0px'}}>{book.title}</h3>
            <p className="muted" style={{margin:'0 0 8px'}}>by {book.author}</p>
            <p className="muted" style={{margin:'0 0 12px'}}>Category: {book.category} • ⭐ {book.rating}</p>
            <Link className="btn" to={`/books/${book.id}`}>View Details</Link>
        </div>
    )
}