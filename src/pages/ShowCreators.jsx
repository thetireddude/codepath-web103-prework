import { Link } from 'react-router'
import Button from '../components/Button'
import Card from '../components/Card'
import styles from './ShowCreators.module.css'

export default function ShowCreators({ data }) {

    console.log(data)

    let creators = data
    let content = null

    if (!creators || creators.length === 0) {
        content = <h2>There are no creators to display</h2>
    } else {
        content = 
            <div className={styles.creators}>
                {creators.map((creator, i) => (
                    <Card
                        key={i}
                        name={creator.name}
                        url={creator.url}
                        description={creator.description}
                        imageURL={creator.imageURL}
                    />
                ))}
            </div>
    }

    return (
        <div className={styles.content}>
            <h1>Creators</h1>
            <div className={styles.buttons}>
                <Button name='Home' link='/'></Button>
                <Button name='Add Creator' link="/add"></Button>
            </div>  
            {content}
        </div>
    )
}