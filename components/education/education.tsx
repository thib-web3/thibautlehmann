/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/education.module.css'
import Image from 'next/image'

const Education: NextPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                About
            </h2>
            <div className={styles.section}>

                <div className={styles.left}>2019 - 2024</div>
                <div className={styles.right}>
                    <h3>ECAM Lasalle</h3>
                    <p className={styles.description}>
                        International generalist engineering school,
                        learning computer science, project managment, mechanic and electronic.
                    </p>
                </div>
            </div>
            {/* <p className={styles.description}>
                I’m Thibaut, a 20 years creative developer passionated about blockchain, from France. With 2 years of experience in web2, 1 year in web3,
                I’m able to think and create scalable web3 decentralized applications.
            </p> */}
        </div>
    )
}

export default Education