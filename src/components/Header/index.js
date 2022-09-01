import React from 'react'
import ConnectWalletButton from '../ConnectWalletButton'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CatalystLogo from '../../assets/images/logo-catalyst.svg'
import CatalystLogoMobile from '../../assets/images/logo-catalyst-mobile.svg'

import './styles.scss'

const Header = ({ setIsConnectClicked, connectedWallet }) => {
    return (
        <Row>
            <Col className="d-flex justify-content-between align-items-center">
                <Image
                    fluid
                    src={CatalystLogo}
                    alt="Catalyst Logo"
                    className="d-none d-md-block d-lg-block d-xl-block icon-padding"
                />
                <Image
                    fluid
                    src={CatalystLogoMobile}
                    alt="Catalyst Logo"
                    className="d-lg-none d-sm-block d-md-none icon-padding"
                />
                <ConnectWalletButton
                    onClick={() => setIsConnectClicked(true)}
                    connectedWallet={connectedWallet}
                >
                    Connect Wallet
                </ConnectWalletButton>
            </Col>
        </Row>
    )
}

export default Header
