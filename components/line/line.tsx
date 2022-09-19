/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/line.module.css'
import Image from 'next/image'

const Line: NextPage = () => {
    return (
        <div className={styles.lines}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
    )
}

export default Line