import { Link } from 'react-router'
import styles from './Button.module.css'

export default function Button( { name, link} ) {
    return (
        // <div className="container">
        //     <div className="text">
        //         <Link to={link}>{name}</Link>
        //     </div>
        // </div>
        <button>
            <Link className={styles.link} to={link}>{name}</Link>
        </button>
    )
}