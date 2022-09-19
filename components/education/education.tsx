/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/education.module.css'
import Image from 'next/image'

const Education: NextPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Education
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
            <div className={styles.gap}></div>
            <div className={styles.section}>

                <div className={styles.left}>2020 - 2021</div>
                <div className={styles.right}>
                    <h3>Erasmus Exchange</h3>
                    <p className={styles.description}>
                        International studies in Lithuania following a general engineering curriculum in english.
                    </p>
                </div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.section}>

                <div className={styles.left}>2016 - 2019</div>
                <div className={styles.right}>
                    <h3>High school </h3>
                    <p className={styles.description}>
                        High school diploma (BAC scientific), with the option : science of the engineer.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Education