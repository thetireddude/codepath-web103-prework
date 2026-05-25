import { Link } from 'react-router'
import styles from './Card.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink, faCircleInfo, faPenToSquare } from '@fortawesome/free-solid-svg-icons'

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
                            <Link to='/view' state={{ creator: { name, url, description, imageURL } }}>
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </Link>
                        </div>
                        <div className={`${styles.button} ${styles['edit-creator']}`}>
                            <Link to='/edit' state={{ creator: { name, url, description, imageURL } }}>
                                <FontAwesomeIcon icon={faPenToSquare} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.url}>
                    <a target='_blank' href={url}>
                        <FontAwesomeIcon icon={faLink}/>
                    </a>
                </div>
                <div className={styles.description}>
                    {description}
                </div>
            </div>
        </div>
    )
}