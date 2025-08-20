import {useMemo, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import SearchBar from '../components/SearchBar'
import BookCard from '../components/BookCard'
import { categories } from '../data'

export default function BrowseBooks(){
    const params = useParams()
    const category = params.category || 'All'
    const [query, setQuery] = useState('')
    const books = useSelector(s=>s.books.list)

    const filtered = useMemo(()=>{
        let list = books
        if(category!== 'All') {
            list = list.filter(b=>b.category.toLowerCase()=== category.toLowerCase())
        }
        if(query.trim()){
            const q = query.toLowerCase()
            list = list.filter(b=> b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q))
        }
        return [...list].sort((a,b) => a.id.localeCompare(b.id))
    }, [books, category,query])

    return(
        <div>
            <h1 className="title">Browse Books {category !== 'All' ? `-${category}`:''}</h1>
            <p className='muted' style={{marginBottom:12}}>Filter by category or search by title/author.</p>
            <div className="stack" style={{marginBottom:"16px"}}>
                {categories.map(cat => (
                    <Link key={cat} to={cat==='All' ? '/books': `/books/${encodeURIComponent(cat)}`} classNmae="category-pill">{cat}</Link>

                ))}
            </div>
            <div style ={{marin:'12px 0 16px'}}>
                <SearchBar query={query} onChange={setQuery} />
            </div>
            {filtered.length === 0?(
                <p className="muted">No books found. Try a different search.</p>
            ):(
                <div className="grid">
                    {filtered.map(b=> <BookCard key={b.id} book={b} />)}
            </div>
            )}
        </div>
    )
}
