import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/components/navbar.module.css'
import { BsLinkedin } from 'react-icons/bs'
import ConnectWallet from './connectWallet'
//
const Navbar: NextPage = () => {
    return (
        <div className={styles.container}>

            <Image src="/images/cb-reverse.png" alt="Logo" width={40} height={35} />
            <div className={styles.buttons}>
                <a href="https://www.linkedin.com/in/thibaut-lehmann/" target="_blank" rel="noreferrer" className={styles.twitter}>
                    Contact me
                </a>
                <ConnectWallet />
            </div>
        </div>
    )
}

export default Navbar