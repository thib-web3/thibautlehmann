/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/links.module.css'
import Image from 'next/image'

const Links: NextPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Links
            </h2>
            <div className={styles.section}>
                <div className={styles.left}>Linkedin</div>
                <div className={styles.right}>
                    <h3 className={styles.links}>thibaut-lehmann</h3>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.left}>Email</div>
                <div className={styles.right}>
                    <h3 className={styles.links}>thibaut.lehmann@hotmail.com</h3>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.left}>Github</div>
                <div className={styles.right}>
                    <h3 className={styles.links}>thib-web3</h3>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.left}>Twitter</div>
                <div className={styles.right}>
                    <h3 className={styles.links}>@thib_web3</h3>
                </div>
            </div>

        </div>
    )
}

export default Links