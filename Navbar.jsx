import { Link, NavLink }  from 'react-router-dom'

export default function Navbar(){
    return (
        <nav style ={{display:'flex', gap:'16px', alignitems:'centre', borderBottom:'1px solid #e5e7eb', padding:'12px 16px', background:'#ffffff', position:'sticky',top:0,zIndex:10}}>
            <Link to="/" style={{fontWeight:600, fontSize:'18px'}}>📚 Library</Link>
            <div style={{display:'flex',gap:12}}>
                <NavLink to="/" end className={({ isActive}) => isActive ? "nav-link active":"nav-link"}>Home</NavLink>
                <NavLink to="/books" className={({ isActive}) => isActive ? "nav-link active":"nav-link"}>Browse Books</NavLink>
                <NavLink to="/add" className={({ isActive}) => isActive ? "nav-link active":"nav-link"}>Add Book</NavLink>
            </div>
        </nav>
    )
}