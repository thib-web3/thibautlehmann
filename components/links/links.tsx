/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/links.module.css'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'

const Links: NextPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Links
            </h2>
            <div className={styles.section}>
                <div className={styles.left}>Linkedin</div>
                <div className={styles.right}>
                    <a href={'https://www.linkedin.com/in/thibaut-lehmann/'} target="_blank" rel="noopener noreferrer" >

                        <h3 className={styles.links}>thibaut-lehmann <FiArrowUpRight /></h3>
                    </a>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.left}>Email</div>
                <div className={styles.right}>
                    <a href={'mailto:thibaut.lehmann@hotmail.com'} target="_blank" rel="noopener noreferrer" >

                        <h3 className={styles.links}>thibaut.lehmann@hotmail.com <FiArrowUpRight /></h3>
                    </a>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.left}>Github</div>
                <div className={styles.right}>
                    <a href={'https://github.com/thib-web3'} target="_blank" rel="noopener noreferrer" >

                        <h3 className={styles.links}>thib-web3 <FiArrowUpRight /></h3>
                    </a>
                </div>
            </div>
            <div className={styles.section}>

                <div className={styles.left}>Twitter</div>
                <div className={styles.right}>
                    <a href={'https://twitter.com/thib_web3'} target="_blank" rel="noopener noreferrer" >
                        <h3 className={styles.links}>@thib_web3 <FiArrowUpRight /></h3>
                    </a>
                </div>
            </div>

        </div>
    )
}

export default Links