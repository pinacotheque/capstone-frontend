import React from 'react'
import styles from './home.module.css'
import { useState } from 'react'
import SingleGame from './SingleGame.jsx'
import PostGame from '../Modals/PostGame'

export default function Feed() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
        <div className={styles.inputDiv}>
            <img src="https://picsum.photos/200" alt="" />
            <input className={styles.postInput} placeholder="Create your team.." onClick={handleShow}/>
        </div>

        <PostGame show={show} handleClose={handleClose}/>
        

        <SingleGame/>
        
        </>
    )
}
