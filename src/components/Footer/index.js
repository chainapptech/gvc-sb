import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import './styles.scss'

import CatalystLogo from '../../assets/images/logo-catalyst.svg'
import Discord from '../../assets/images/discord.svg'
import Telegram from '../../assets/images/telegram.svg'
import YouTube from '../../assets/images/YouTube-color.svg'

const Footer = () => {
    return (
        <Row className="flex-lg-row flex-column align-items-center justify-content-lg-between text-center divider g-0 pt-3">
            <Col>
                <Image
                    fluid
                    src={CatalystLogo}
                    alt="Catalyst Logo"
                    className="m-auto m-lg-0 p-lg-0"
                />
            </Col>
            <Col className="d-flex flex-lg-row flex-column">
                <p className="pe-lg-3 footer-text pt-4 pb-3 pb-lg-0 pt-lg-0 m-lg-0">
                    Sign up to mailing list
                </p>
                <p className='footer-text pt-4 pb-3 pt-lg-0 pb-lg-0 m-lg-0'>Cardano proposals</p>
            </Col>
            <Col className="d-flex justify-content-lg-end justify-content-center">
                <Image fluid src={Discord} className="pe-3" />
                <Image fluid src={Telegram} className="pe-3" />
                <Image fluid src={YouTube} className="" />
            </Col>
        </Row>
    )
}

export default Footer
