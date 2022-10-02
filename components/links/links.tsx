/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/links.module.css'
import Image from 'next/image'
import { FiArrowUpRight } from 'react-icons/fi'
import splitbee from '@splitbee/web';
const Links: NextPage = () => {
    splitbee.init()
    return (
        <div className={styles.container}>
            <div className={styles.box}>

                <div className={styles.social}>Email:</div>
                <a href={'mailto:contact@thibautlehmann.dev'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("Email")} >

                    <h3 className={styles.links}>contact@thibautlehmann.dev <FiArrowUpRight /></h3>
                </a>
            </div>
            <div className={styles.box}>
                <div className={styles.social}>Linkedin:</div>
                <a href={'https://www.linkedin.com/in/thibaut-lehmann/'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("Linkedin")} >

                    <h3 className={styles.links}>thibaut-lehmann <FiArrowUpRight /></h3>
                </a>
            </div>


            <div className={styles.box}>

                <div className={styles.social}>Github:</div>
                <a href={'https://github.com/thib-web3'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("Github")} >

                    <h3 className={styles.links}>thib-web3 <FiArrowUpRight /></h3>
                </a>
            </div>
            <div className={styles.box}>

                <div className={styles.social}>CV:</div>
                <a href={'/images/CV_Thibaut_Lehmann.pdf'} download onClick={() => splitbee.track("Download CV")}>
                    <h3 className={styles.links}>Download CV <FiArrowUpRight /></h3>


                </a>

            </div>



            {/* <h2 className={styles.title}>
                Links
            </h2>
            <div className={styles.section}>
                <div className={styles.left}>Linkedin</div>
                <div className={styles.right}>
                    <a href={'https://www.linkedin.com/in/thibaut-lehmann/'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("Linkedin")} >

                        <h3 className={styles.links}>thibaut-lehmann <FiArrowUpRight /></h3>
                    </a>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.left}>Email</div>
                <div className={styles.right}>
                    <a href={'mailto:thibaut.lehmann@hotmail.com'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("Email")} >

                        <h3 className={styles.links}>thibaut.lehmann@hotmail.com <FiArrowUpRight /></h3>
                    </a>
                </div>
            </div>
            <div className={styles.section}>
                <div className={styles.left}>Github</div>
                <div className={styles.right}>
                    <a href={'https://github.com/thib-web3'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("Github")} >

                        <h3 className={styles.links}>thib-web3 <FiArrowUpRight /></h3>
                    </a>
                </div>
            </div>
            <div className={styles.section}>

                <div className={styles.left}>Twitter</div>
                <div className={styles.right}>
                    <a href={'https://twitter.com/thib_web3'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("Twitter")}>
                        <h3 className={styles.links}>@thib_web3 <FiArrowUpRight /></h3>
                    </a>
                </div>
            </div> */}

        </div>
    )
}

export default Links