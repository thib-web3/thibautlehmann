import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/components/navbar.module.css'
import { BsLinkedin } from 'react-icons/bs'
import ConnectWallet from './connectWallet'
import { FiArrowUpRight } from 'react-icons/fi'
import splitbee from '@splitbee/web';
const Navbar: NextPage = () => {
    splitbee.init()
    return (
        <div className={styles.container}>

            <a href="https://www.linkedin.com/in/thibaut-lehmann/" target="_blank" rel="noreferrer" className={styles.contact}>
                Contact me <FiArrowUpRight />
            </a>
            <div className={styles.buttons}>
                <ConnectWallet />
            </div>
        </div>
    )
}

export default Navbar