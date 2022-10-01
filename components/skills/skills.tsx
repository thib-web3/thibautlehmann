/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/skills.module.css'
import Image from 'next/image'

const Skills: NextPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Skills
            </h2>
            <div className={styles.section}>

                <div className={styles.left}></div>
                <div className={styles.right}>
                    <h3>Hard skills</h3>
                    <p className={styles.description}>
                        Solidity • HardHat • IPFS • ethers.js
                    </p>
                    <p className={styles.description}>
                        web3.js • NextJs • TypeScript • JavaScript
                    </p>
                    <p className={styles.description}>
                        React / React native • NodeJs • Git • Figma
                    </p>
                    <div className={styles.gap}></div>
                    <h3>Soft skills</h3>
                    <p className={styles.description}>
                        Project management •  Entrepreneurship
                    </p>
                    <p className={styles.description}>
                        Communication •  Creativity • Agile method
                    </p>

                </div>
            </div>


        </div>
    )
}

export default Skills