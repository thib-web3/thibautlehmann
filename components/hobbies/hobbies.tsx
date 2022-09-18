/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/hobbies.module.css'
import Image from 'next/image'

const Hobbies: NextPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Hobbies
            </h2>
            <div className={styles.section}>

                <div className={styles.left}></div>
                <div className={styles.right}>

                    <p className={styles.description}>
                        Gym •  Basketball • Reading • Podcasts
                    </p>
                    <p className={styles.description}>
                        Embedded systems •  3D printing
                    </p>

                </div>
            </div>


        </div>
    )
}

export default Hobbies