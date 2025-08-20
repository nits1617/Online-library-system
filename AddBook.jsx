import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {addBook} from '../redux/booksSlice'
import { categories } from '../data'

export default function AddBook(){
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [form, setform] = useState({
        title:'',
        author:'',
        category:'Fiction',
        description:'',
        rating:4,
        image:''
    })
    const [errors, setErrors]= useState({})

    function validate(values){
        const e ={}
        if(!values.title.trim()) e.title = 'Title is required'
        if(!values.author.trim()) e.author = 'Author is required'
        if(!values.description.trim()) e.description = 'Description is required'
        if(!values.category.trim()) e.category = 'Category is required'
        const r = Number(values.rating)
        if(Number.isNaN(r) || r < 1 || r > s) e.rating = 'Rating must be 1 to 5'
        if(values.image && !/^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)/i.test(values.image)){
            e.image = 'Must be a valid image URL (jpg, png, etc.)'
        }
        return e
    }
    function handleChange(e){
        const { name, value} = e.target
        setform(prev => ({...prev,[name]: name==='rating'?Number(value) : value}))
    }
    function handleSubmit(e){
        e.preventDefault()
        const eobj = validate(form)
        setErrors(eobj)
        if(Object.keys(eobj).length === 0){
            dispatch(addBook(form))
            navigate(`/books/$(encodeURIComponent(form.category)}`)
        }
    }

    return (
        <div>
      <h1 className="title">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="card" style={{maxWidth:720}}>
        <div style={{display:'grid', gap:12}}>
          <div>
            <label>Title</label><br/>
            <input className="input" name="title" value={form.title} onChange={handleChange} />
            {errors.title && <div className="muted" style={{color:'#b91c1c'}}>{errors.title}</div>}
          </div>
          <div>
            <label>Author</label><br/>
            <input className="input" name="author" value={form.author} onChange={handleChange} />
            {errors.author && <div className="muted" style={{color:'#b91c1c'}}>{errors.author}</div>}
          </div>
          <div>
            <label>Category</label><br/>
            <select className="select" name="category" value={form.category} onChange={handleChange}>
              {categories.filter(c=>c!=='All').map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            {errors.category && <div className="muted" style={{color:'#b91c1c'}}>{errors.category}</div>}
          </div>
          <div>
            <label>Description</label><br/>
            <textarea className="input" rows="4" name="description" value={form.description} onChange={handleChange} />
            {errors.description && <div className="muted" style={{color:'#b91c1c'}}>{errors.description}</div>}
          </div>
          <div>
            <label>Rating (1–5)</label><br/>
            <input className="input" type="number" min="1" max="5" name="rating" value={form.rating} onChange={handleChange} />
            {errors.rating && <div className="muted" style={{color:'#b91c1c'}}>{errors.rating}</div>}
          </div>
          <div>
            <label>Cover Image URL</label><br/>
            <input className="input" name="image" value={form.image} onChange={handleChange} />
            {errors.image && <div className="muted" style={{color:'#b91c1c'}}>{errors.image}</div>}
          </div>
        </div>
        <div className="stack" style={{marginTop:12}}>
          <button className="btn" type="submit">Add Book</button>
          <button className="btn secondary" type="button" onClick={()=>navigate('/books')}>Cancel</button>
        </div>
      </form>
    </div>
    )
}