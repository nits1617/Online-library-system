import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { categories } from '../data'
import BookCard from '../components/BookCard'

export default function Home(){
    const books = useSelector(s => s.books.list)
    const popular = [...books].sort((a,b) =>b.rating-a.rating).slice(0,4)

    return(
        <div>
            <h1 className="title">Welcome to the Online Library</h1>
            <p className = "subtitle muted">Browse by category, search your favorites, and add new books to the collection.</p>
            <section style={{margin:'40px 0'}}>
                <h2 style={{margin:'0 0 10px'}}>Categories</h2>
                <div className="stack">
                    {categories.map(cat => (
                        <Link key={cat} to={cat ==='All'? '/books':`/books/${encodeURIComponent(cat)}`}className="category-pill">{cat}</Link>   
                    ))}
                </div>
            </section>

            <section style={{margin:'24px 0'}}>
                <h2 style={{marginn:'0 0 12px'}}>Popular Books</h2>
                <div classNmae='grid'>
                    {popular.map(b=><BookCard key={b.id} book={b} />)}
                </div>
            </section>
        </div>
    )
}

