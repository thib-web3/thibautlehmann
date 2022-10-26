/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/about.module.css'
import Image from 'next/image'

const About: NextPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.section}>

                <div className={styles.left}></div>
                <div className={styles.right}>
                    <p className={styles.description}>
                        I’m Thibaut, a french 20 years old, creative developer with a passion for blockchain.
                    </p>
                    <p className={styles.description}>
                        With two years of experience in web2 and one year in web3.</p>
                    <p className={styles.description}>
                        I’m able to create scalable web3 decentralized applications.</p>

                </div>
            </div>
        </div>
    )
}

export default About