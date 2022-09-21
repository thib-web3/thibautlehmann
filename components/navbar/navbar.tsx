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

            <Image width={17} height={27} src={'/images/ethereum.png'} loading={"lazy"} />

            <div className={styles.buttons}>
                <ConnectWallet />
            </div>
        </div>
    )
}

export default Navbar