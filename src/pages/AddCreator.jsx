import Button from '../components/Button'
import { Link } from 'react-router'
import { supabase } from '../client.js'
import { useRef } from 'react';
import styles from './AddCreator.module.css'

export default function AddCreator() {

    // const nameInput = document.getElementById('name');
    // const URLInput = document.getElementById('url');
    // const descriptionInput = document.getElementById('description');
    // const imageURLInput = document.getElementById('imageURL');

    const nameRef = useRef(null)
    const urlRef = useRef(null)
    const descRef = useRef(null)
    const imageRef = useRef(null)

    const handleSubmit = async () => {
        console.log("Submitting...")

        if (!nameRef.current.value || !urlRef.current.value || !descRef.current.value || !imageRef.current.value) {
            return
        }

        console.log("all fields exist")

        const { data, error } = await supabase
        .from('creators')
        .insert([{
            name: nameRef.current.value,
            url: urlRef.current.value,
            description: descRef.current.value,
            imageURL: imageRef.current.value
        }])

        console.log("added to database, returning to /creators")

        window.location.href = '/creators#Creators'
    }

    return (
        <div className={styles.content}>
            <h2>Add Creator</h2>

            <div className={styles.form}>
                <div className={styles.field}>
                    <label htmlFor="name">Name:</label>
                    <input ref={nameRef}type="text" id="name" name="name"/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="url">Socials Link:</label>
                    <input ref={urlRef} type="text" id="url" name="url"/>
                </div>
                <div className={`${styles.field} ${styles.textarea}`}>
                    <label htmlFor="description">Description:</label>
                    <textarea ref={descRef} id="description" name="description" rows='5' cols='40'/>
                </div>
                <div className={styles.field}>
                    <label htmlFor="imageURL">Image:</label>
                    <input ref={imageRef} type="text" id="imageURL" name="imageURL"/>
                </div>
            </div>
            <div className={styles.buttons}>
                    <Button name='Cancel' link='/creators#Creators'></Button>
                    <button className={styles.submitBtn} type='submit' onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}