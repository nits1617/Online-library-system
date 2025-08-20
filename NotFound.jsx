import {Link} from 'react-router-dom'

export default function NotFound(){
    return(
        <div>
            <h1 clasNmae="title">404-Page Not Found</h1>
            <p className="muted">The page you are looking for doesn't exist.</p>
            <Link className="btn" to="/">Back to Home</Link>
        </div>
    )
}