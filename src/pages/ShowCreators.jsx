import { Link } from 'react-router'
import Button from '../components/Button'
import Card from '../components/Card'
import styles from './ShowCreators.module.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


export default function ShowCreators({ data }) {

    useEffect(() => {
        const header = document.querySelector('.header')
        const prevDisplay = header ? header.style.display : null
        if (header) header.style.display = 'none'
        return () => { if (header) header.style.display = prevDisplay || '' }
    }, [])

    // console.log(data)

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

    const location = useLocation()

    useEffect(() => {
        const timer = setTimeout(() => {
            if (location?.hash) {
                const id = location.hash.slice(1)
                const target = document.getElementById(id)
                if (target){
                    target.scrollIntoView({ behavior: 'smooth' })
                }
            }
        }, 500);

        return () => clearTimeout(timer); //cleanup
        
    }, [])

    return (
        <div className={styles.content}>
            <div className={styles.space}>
                <div className={styles.creatorverse}>
                    <h2>The</h2>
                    <h1>Creatorverse</h1>
                </div>
                <div className={styles.buttons}>
                    <a className={styles.allCreatorsBtn} href='#Creators'>All Creators</a>
                    <Button name='Add Creator' link="/add"></Button>
                </div>
            </div>
            <div id="Creators">
                <h2>Creators</h2>
            </div>
            <div className={styles.buttons}>
                <Button name='Add Creator' link="/add"></Button>
            </div>  
            {content}
        </div>
    )
}