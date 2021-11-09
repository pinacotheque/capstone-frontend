import React from 'react'
import styles from './home.module.css'
import {Container, Col, Row} from 'react-bootstrap'
export default function Feed() {
    return (
        <div className={styles.inputDiv}>

            <input className={styles.postInput} placeholder="Create your team.."/>
        </div>
    )
}
