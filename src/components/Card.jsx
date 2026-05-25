import { Link } from 'react-router'
import styles from './Card.module.css'

export default function Card( {name, url, description, imageURL}) {
    const bgStyle = {
        backgroundImage: `url(${imageURL})`
    };

    return (
        <div className={styles.container}>
            <div className={styles.bg} style={bgStyle}></div>
            <div className={styles.content}>
                <div className={styles.header}>
                    <div className={styles.name}>
                        {name}
                    </div>
                    <div className={styles.buttons}>
                        <div className={`${styles.button} ${styles['view-creator']}`}>
                            <Link to='/view' state={{ creator: { name, url, description, imageURL } }}>ℹ️</Link>
                        </div>
                        <div className={`${styles.button} ${styles['edit-creator']}`}>
                            <Link to='/edit' state={{ creator: { name, url, description, imageURL } }}>📝</Link>
                        </div>
                    </div>
                </div>
                <div className={styles.url}>
                    <a target='_blank' href={url}>🔗</a>
                </div>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
        </div>
    )
}