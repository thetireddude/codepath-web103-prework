import Button from '../components/Button'
import { Link } from 'react-router'
import { useLocation } from 'react-router-dom'
import styles from './EditCreator.module.css'
import { supabase } from '../client.js'
import { useRef, useEffect } from 'react';

export default function EditCreator() {

    const linkState = useLocation()
    const creator = linkState?.state.creator

    console.log(linkState.state.creator)

    if (!creator) return <div><h2>No creator data</h2></div>
    
    const nameRef = useRef(creator.name)
    const urlRef = useRef(creator.url)
    const descRef = useRef(creator.description)
    const imageRef = useRef(creator.imageURL)

    useEffect(() => {
      nameRef.current.value = creator.name;
      urlRef.current.value = creator.url;
      descRef.current.value = creator.description;
      imageRef.current.value = creator.imageURL;
    
    }, []);

    const handleSubmit = async () => {
        console.log("Submitting...")

        if (!nameRef.current.value || !urlRef.current.value || !descRef.current.value || !imageRef.current.value) {
            return
        }

        console.log("all fields exist")

        const { data, error } = await supabase
        .from('creators')
        .update([{
            name: nameRef.current.value,
            url: urlRef.current.value,
            description: descRef.current.value,
            imageURL: imageRef.current.value
        }])
        .eq('name', creator.name)

        console.log("edits updated in database, returning to /creators")

        window.location.href = '/#Creators'
    }

    const handleDelete = async () => {
        console.log("deleting...")

        const { data, error } = await supabase
        .from('creators')
        .delete()
        .eq('name', creator.name)

        console.log("creator deleted, returning to /creators")

        window.location.href = '/#Creators'
    }

    return (
        <div className={styles.content}>
            <h2>Edit Creator</h2>
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
                    <button className={styles.submitBtn} type='submit' onClick={handleSubmit}>Confirm</button>
                    <button className={styles.deleteBtn} onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}