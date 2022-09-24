import type { NextPage } from 'next'
import Image from 'next/image'
import styles from '../../styles/components/navbar.module.css'
import wallet from '../../styles/components/connectWallet.module.css'
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
                {/* <ConnectWallet /> */}
                <a href={'mailto:contact@thibautlehmann.dev'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("Hire me")} >

                    <button type="button" className={wallet.container}>
                        <p className={wallet.text}>Hire me</p>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Navbar