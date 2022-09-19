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
            <p className={styles.description}>
                I’m Thibaut, a 20 years old creative blockchain developer, from France. With two years of experience in web2, and one year in web3,
                I’m able to think and create scalable web3 decentralized applications.
            </p>
        </div>
    )
}

export default About