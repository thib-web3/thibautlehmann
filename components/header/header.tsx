/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/header.module.css'
import Image from 'next/image'

const Header: NextPage = () => {
    return (
        <div className={styles.container}>


            <img className={styles.image} src={'/images/thibaut-lehmann.png'} loading={"lazy"} />

            <div className={styles.right}>
                <h1>Thibaut Lehmann</h1>
                <p>Full-stack Blockchain Developer</p>
                <p>Engineering student</p>
            </div>
        </div>
    )
}

export default Header