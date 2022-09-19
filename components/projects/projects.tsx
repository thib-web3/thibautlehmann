/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import type { NextPage } from 'next'
import styles from '../../styles/components/projects.module.css'
import Image from 'next/image'

const Projects: NextPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>
                Projects
            </h2>
            <div className={styles.section}>

                <div className={styles.left}>Sept. 2022</div>
                <div className={styles.right}>
                    <h3>BrokeAsses</h3>
                    <div className={styles.right__container}>

                        <p className={styles.description}>
                            NFT minting dApp made for learning purposes on the ethereum blockchain.
                        </p>
                        <img className={styles.images} src={'/images/brokeasses.png'} loading={"lazy"} />
                    </div>
                    <p className={styles.stacks}>Solidity • NextJs • IPFS • TypeScript • Figma</p>
                </div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.section}>

                <div className={styles.left}>Apr. 2022</div>
                <div className={styles.right}>
                    <h3>Sparkies NFT Marketplace</h3>
                    <div className={styles.right__container}>

                        <p className={styles.description}>
                            NFT Marketplace, buy, sell, trade and even create your own NFTs on the Velas Blockchain. The Marketplace launched with a secret NFT collection.
                        </p>
                        <img className={styles.images} src={'/images/sparkies.png'} loading={"lazy"} />
                    </div>
                    <p className={styles.stacks}>Solidity • NextJs • IPFS • TypeScript • Figma</p>
                </div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.section}>

                <div className={styles.left}>Dec. 2021</div>
                <div className={styles.right}>
                    <h3>CryptoBroke</h3>
                    <div className={styles.right__container}>

                        <p className={styles.description}>
                            NFT Collection of investors that lost lot of money on the crypto market.
                            Sold out within 6 days.
                        </p>

                        <img className={styles.images} src={'/images/cryptobroke.png'} loading={"lazy"} />
                    </div>
                    <p className={styles.stacks}>Solidity • React • IPFS • TypeScript • Figma</p>
                </div>
            </div>
            <div className={styles.gap}></div>
            <div className={styles.section}>

                <div className={styles.left}>Aug. 2021</div>
                <div className={styles.right}>
                    <h3>BasketBall App</h3>
                    <div className={styles.right__container}>

                        <p className={styles.description}>
                            BasketBall application for a coach. Students can book a session, watch tutorials and be tracked by the coach.
                        </p>

                        <img className={styles.images} src={'/images/basketballApp.png'} loading={"lazy"} />
                    </div>
                    <p className={styles.stacks}>React Native • JavaScript • Figma</p>
                </div>
            </div>

        </div>
    )
}

export default Projects