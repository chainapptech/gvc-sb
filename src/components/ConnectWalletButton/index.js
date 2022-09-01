import { useEffect, useState } from 'react'
import { Button as ButtonComponent } from 'react-bootstrap'
import threeDots from '../../assets/images/threeDots.svg'
import avatar from '../../assets/images/Avatar.png'
import './styles.scss'

const Button = ({ onClick, connectedWallet, children }) => {
    const [walletBalance, setWalletBalance] = useState(0)

    const getWalletBalance = async () => {
        const res = await connectedWallet.wallet.getBalance()
        setWalletBalance(res)
    }

    useEffect(() => {
        if (connectedWallet) getWalletBalance()
    }, [connectedWallet])

    return (
        <>
            {connectedWallet ? (
                <div className="profile-button">
                    <img src={avatar} alt="" />
                    <div className="balance-wrapper me-3">
                        <p className="balance">{walletBalance} ADA</p>
                        <p className="address">
                            {connectedWallet.address.substring(0, 4)}...
                            {connectedWallet.address.substring(
                                connectedWallet.address.length - 4
                            )}
                        </p>
                    </div>
                    <img src={threeDots} alt="dots" />
                </div>
            ) : (
                <ButtonComponent
                    variant="primary"
                    onClick={onClick}
                    className="wallet-container"
                >
                    {children}
                </ButtonComponent>
            )}
        </>
    )
}

Button.defaultProps = {
    children: 'Button',
    variant: 'primary',
}
export default Button
