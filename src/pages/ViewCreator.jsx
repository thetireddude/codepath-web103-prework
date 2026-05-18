import Button from '../components/Button'
import { Link } from 'react-router'
import { useLocation } from 'react-router-dom'
import styles from './ViewCreator.module.css'

export default function ViewCreator() {
    const linkState = useLocation()
    const creator = linkState?.state.creator

    // console.log(linkState.state.creator)

    if (!creator) return <div><h2>No creator data</h2></div>

    const bgStyle = {
        backgroundImage: `url(${creator.imageURL})`
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.image}>
                        <img src={creator.imageURL}/>
                    </div>
                    <div>
                        <h1>{creator.name}</h1>
                    </div>
                </div>
                <div className={styles.link}>
                    <a target='_blank' href={creator.url}>🔗</a>
                </div>
                <div className={styles.description}>
                    {creator.description}
                </div>
                <Button name='Back' link='/creators'></Button>
            </div>
        </>
    )
}