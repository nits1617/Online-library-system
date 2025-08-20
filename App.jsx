import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import BrowseBooks from './pages/BrowseBooks.jsx'
import BookDetails from './pages/BookDetails.jsx'
import AddBook from './pages/AddBook.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App(){
  return(
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/category/:category" element={<BrowseBooks />} />
          <Route path="/books/:id" element={<BookDetails />} />
          <Route path="/add" element={<AddBook />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
      <footer>© {new Date().getFullYear()} Online Library System</footer>
    </div>
  )
}