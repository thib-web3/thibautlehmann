/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import styles from '../../styles/components/connectWallet.module.css'

import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import toast from 'react-hot-toast';
import splitbee from '@splitbee/web';


const ConnectWallet: NextPage = () => {
    splitbee.init()
    const { isConnected, isDisconnected, isConnecting } = useAccount()
    // const handleConnection = () => {
    //     if (isConnected) {
    //         toast('Wallet connected!', {
    //             icon: '👏',
    //         });

    //     }

    // }
    // useEffect(() => {

    //     handleConnection()
    // }, [isConnected])


    return (
        <div data-splitbee-event="Connect wallet" onClick={() => splitbee.track("Connect Wallet")}>
            <ConnectButton.Custom>
                {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,

                    mounted,
                }) => {

                    const ready = mounted;
                    const connected =
                        ready &&
                        account &&
                        chain

                    return (
                        <div
                            {...(!ready && {
                                'aria-hidden': true,
                                'style': {
                                    opacity: 0,
                                    pointerEvents: 'none',
                                    userSelect: 'none',
                                },
                            })}
                        >
                            {(() => {
                                if (!connected) {
                                    return (
                                        <button onClick={openConnectModal} type="button" className={styles.container}>
                                            <p className={styles.text}>Hire me</p>
                                        </button>
                                    );
                                }

                                if (chain.unsupported) {
                                    return (
                                        <button onClick={openChainModal} type="button" className={styles.container} style={{ background: '#f26e6e' }}>
                                            <p className={styles.text}>Wrong network</p>
                                        </button>
                                    );
                                }

                                return (
                                    <div style={{ display: 'flex', gap: 12 }}>


                                        <button onClick={openAccountModal} type="button" className={styles.container}>
                                            <p className={styles.text}>{account.displayName}</p>

                                        </button>
                                    </div>
                                );
                            })()}
                        </div>
                    );
                }}
            </ConnectButton.Custom>
            {/* <ConnectButton accountStatus={"full"} showBalance={false} /> */}
        </div>
    )
}



export default ConnectWallet