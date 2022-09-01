import { Modal as BootstrapModal } from 'react-bootstrap'

import { connectWallet } from '../../lib/walletConnect'
import walletSvg from '../../assets/images/wallet-icon.svg'

import './styles.scss'
import { useState } from 'react'

const wallets = [
    { label: 'Litewallet', type: 'lightWallet' },
    { label: 'Deadalus', type: 'deadalus' },
    { label: 'Yoroi', type: 'yoroi' },
    { label: 'Nami', type: 'nami' },
]

const Modal = ({ show, onClose, setConnectedWallet }) => {
    const [warningShow, setWarningShow] = useState(false)

    const connect = async (walletType) => {
        setWarningShow(false)
        const res = await connectWallet(walletType)

        if (res === {}) {
            setWarningShow(true)
            return
        }
        setConnectedWallet(res)
        localStorage.setItem('walletType', walletType)
        onClose()
    }

    return (
        <BootstrapModal show={show} onHide={onClose} backdrop centered>
            <BootstrapModal.Header closeButton></BootstrapModal.Header>
            <BootstrapModal.Title>Connect your Wallet</BootstrapModal.Title>
            <BootstrapModal.Body>
                <div className="d-flex flex-column justify-content-center w-100">
                    <p>Choose the wallet you want to connect with</p>
                    {wallets.map(({ label, type }) => (
                        <div
                            className="wallet"
                            key={type}
                            onClick={() => connect(type)}
                        >
                            <span className="d-flex justify-content-between">
                                {label} <img src={walletSvg} alt="" />
                            </span>
                        </div>
                    ))}
                </div>
            </BootstrapModal.Body>
        </BootstrapModal>
    )
}

export default Modal
