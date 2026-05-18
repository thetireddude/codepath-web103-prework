import { Link } from 'react-router'
import './Button.css'

export default function Button( { name, link} ) {
    return (
        // <div className="container">
        //     <div className="text">
        //         <Link to={link}>{name}</Link>
        //     </div>
        // </div>
        <button>
            <Link className='link' to={link}>{name}</Link>
        </button>
    )
}