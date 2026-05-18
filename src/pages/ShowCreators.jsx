import { Link } from 'react-router'
import Button from '../components/Button'
import Card from '../components/Card'
import './ShowCreators.css'

export default function ShowCreators({ data }) {

    console.log(data)

    let creators = data
    let content = null

    if (!creators || creators.length === 0) {
        content = <h2>There are no creators to display</h2>
    } else {
        content = 
            <div className='creators'>
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
        <div className='content'>
            <h1>Creators</h1>
            <Button name='Home' link='/'></Button>
            <Button name='Add Creator' link="/add"></Button>
            {content}
        </div>
    )
}