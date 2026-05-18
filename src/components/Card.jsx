import './Card.css'
import { Link } from 'react-router'

export default function Card( {name, url, description, imageURL}) {
    const bgStyle = {
        backgroundImage: `url(${imageURL})`
    };

    return (
        <div className="container">
            <div className='bg' style={bgStyle}></div>
            <div className='content'>
                <div className="header">
                    <div className="name">
                        {name}
                    </div>
                    <div className='buttons'>
                        <div className="button view-creator">
                            <Link to='/view' state={{ creator: { name, url, description, imageURL } }}>ℹ️</Link>
                        </div>
                        <div className="button edit-creator">
                            <Link to='/edit' state={{ creator: { name, url, description, imageURL } }}>📝</Link>
                        </div>
                    </div>
                </div>
                <div className="url">
                    <a target='_blank' href={url}>🔗</a>
                </div>
                <div className="description">
                    {description}
                </div>
            </div>
        </div>
    )
}