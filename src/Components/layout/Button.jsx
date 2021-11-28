import styles from './layout.module.css'

export default function MainButton ({title}) {
    return(
        <button className={styles.button}> {title}</button>
    )
}