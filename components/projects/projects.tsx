/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/projects.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FiArrowUpRight } from 'react-icons/fi'
import splitbee from '@splitbee/web';
const Projects: NextPage = () => {
    splitbee.init()
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Projects
            </h2>
            <div className={styles.section}>

                <div className={styles.left}>Sept. 2022</div>
                <div className={styles.right}>
                    <a href={'https://broke-asses-nft.vercel.app/'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("BrokeAsses")} >

                        <h3 className={styles.underline}>BrokeAsses <FiArrowUpRight /></h3>
                    </a>
                    <div className={styles.right__container}>

                        <p className={styles.description}>
                            NFT minting dApp made for learning purposes on the ethereum blockchain. <br></br>Solo project, in order to apply my recent skills in solidity.
                        </p>
                        <a href={'https://broke-asses-nft.vercel.app/'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("BrokeAsses")} >

                            <img className={styles.images} src={'/images/brokeasses.png'} loading={"lazy"} />
                        </a>
                    </div>
                    <p className={styles.stacks}>Solidity • NextJs • IPFS • TypeScript • Figma</p>
                </div>
            </div>
            <div className={styles.gap}></div>

            <div className={styles.section}>
                <div className={styles.left}>Apr. 2022</div>
                <div className={styles.right}>
                    <a href={'https://sparkies.io'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("Sparkies")}>

                        <h3 className={styles.underline}>Sparkies NFT Marketplace <FiArrowUpRight /></h3>
                    </a>
                    <div className={styles.right__container}>
                        <p className={styles.description}>
                            <p className={styles.insight}>3.8k users • 76.3k NFTs</p>
                            NFT Marketplace, buy, sell, trade and even create your own NFTs on the Velas Blockchain.
                            The Marketplace launched with a secret NFT collection (500 NFTs sold).


                        </p>
                        <a href={'https://sparkies.io'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("Sparkies")}>

                            <img className={styles.images} src={'/images/sparkies.png'} loading={"lazy"} />
                        </a>
                    </div>
                    <p className={`${styles.description} ${styles.description2}`}>
                        As part of a 4 member team, my missions were:
                        <br></br>• UI / UX design
                        <br></br>• Frontend development
                        <br></br>• Smart contracts integration
                        <br></br>• Community management (twitter, telegram and discord)
                    </p>
                    <p className={styles.stacks}>Solidity • NextJs • IPFS • TypeScript • Figma</p>
                </div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.section}>

                <div className={styles.left}>Dec. 2021</div>
                <div className={styles.right}>
                    <a href={'https://cryptobrokesquad.xyz/'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("CryptoBroke")} >

                        <h3 className={styles.underline}>CryptoBroke <FiArrowUpRight /></h3>
                    </a>
                    <div className={styles.right__container}>

                        <p className={styles.description}>
                            <p className={styles.insight}>666 NFTs sold out in 6 days</p>
                            NFT Collection representing investors who lost a lot of money in the crypto-currency market.
                            This collection is based on the Velas Blockchain.


                        </p>
                        <a href={'https://cryptobrokesquad.xyz/'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("CryptoBroke")} >

                            <img className={styles.images} src={'/images/cryptobroke.png'} loading={"lazy"} />
                        </a>
                    </div>
                    <p className={`${styles.description} ${styles.description2}`}>
                        In a team of 3 members, my tasks were:
                        <br></br>• UI / UX design
                        <br></br>• Frontend development
                        <br></br>• Smart contracts integration
                        <br></br>• Community management (twitter, telegram and discord)
                    </p>
                    <p className={styles.stacks}>Solidity • React • IPFS • TypeScript • Figma</p>
                </div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.section}>

                <div className={styles.left}>Aug. 2021</div>
                <div className={styles.right}>
                    <a href={'https://cartercoachingapp.com/'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("CryptoBroke")} >

                        <h3 className={styles.underline}>BasketBall App <FiArrowUpRight /></h3>
                    </a>
                    <div className={styles.right__container}>

                        <p className={styles.description}>
                            BasketBall application for a coach. Students can book a session, watch tutorials and be tracked by the coach.
                            <br></br>
                            Due to a lack of time for studies, the project was taken over by a company.

                        </p>
                        <a href={'https://cartercoachingapp.com/'} target="_blank" rel="noopener noreferrer" onClick={() => splitbee.track("CryptoBroke")} >
                            <img className={styles.images} src={'/images/basketballApp.png'} loading={"lazy"} />

                        </a>

                    </div>
                    <p className={styles.description}>

                        As part of a two-person team, and a freelancer, my job was the frontend development, I had to integrate the UI and UX design into code.
                    </p>
                    <p className={styles.stacks}>React Native • JavaScript • Figma</p>
                </div>
            </div>

        </div>
    )
}

export default Projects