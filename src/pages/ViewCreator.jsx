import Button from '../components/Button'
import { Link } from 'react-router'
import { useLocation, useParams } from 'react-router-dom'
import styles from './ViewCreator.module.css'
import { supabase } from '../client.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

export default function ViewCreator() {
    const linkState = useLocation()
    const creator = linkState?.state.creator    

    // console.log(linkState.state.creator)

    if (!creator) return <div><h2>No creator data</h2></div>

    let { slug } = useParams();

    useEffect(() => {
        console.log(slug);
    }, []);

    const handleDelete = async () => {
            console.log("deleting...")
    
            const { data, error } = await supabase
            .from('creators')
            .delete()
            .eq('name', creator.name)
    
            console.log("creator deleted, returning to /creators")
    
            window.location.href = '/creators#allCreatorsBtnTarget'
        }


    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <img src={creator.imageURL}/>
                    </div>
                    <div className={styles.name}>
                        <h1>{creator.name}</h1>
                    </div>
                </div>
                <div className={styles.link}>
                    <a target='_blank' href={creator.url}>
                        <FontAwesomeIcon icon={faLink}/>
                    </a>
                </div>
                <div className={styles.description}>
                    {creator.description}
                </div>
                <div className={styles.buttons}>
                    <Button name='Back' link='/creators#allCreatorsBtnTarget'></Button>
                    <div className={`${styles.editBtn} ${styles['edit-creator']}`}>
                        <Link className={styles.editLink} to='/edit' state={{ creator: { name: creator.name, url: creator.url, description: creator.description,imageURL: creator.imageURL } }}>
                            Edit
                        </Link>
                    </div>
                    <button className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </>
    )
}