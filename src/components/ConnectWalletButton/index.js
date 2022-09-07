import { useEffect, useState } from 'react'
import { Button as ButtonComponent } from 'react-bootstrap'
import threeDots from '../../assets/images/threeDots.svg'
import avatar from '../../assets/images/Avatar.png'
import './styles.scss'
import ProfileButton from '../ProfileButton'

const Button = ({ onClick, connectedWallet, children, value, adressName }) => {
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
                <ProfileButton
                    value={`${walletBalance} ADA`}
                    adressName={`${connectedWallet.address.substring(
                        0,
                        4
                    )}...${connectedWallet.address.substring(
                        connectedWallet.address.length - 4
                    )}`}
                />
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
