import React from 'react'
import { Modal as BootstrapModal } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoaderBar from '../LoaderBar'
import ButtonComponent, { ButtonSizes, ButtonTypes } from '../Button'

import './styles.scss'

const WalletModal = ({ show, textHeading, text, number }) => {
    return (
        <BootstrapModal show={show} backdrop centered className="wallet-modal">
            <BootstrapModal.Header closeButton></BootstrapModal.Header>
            <BootstrapModal.Title>
                <Row className="align-items-center flex-row">
                    <Col xs={10} lg={8} className="wallet-registration">
                        Wallet Registration
                    </Col>
                    <Col xs={2} lg={4} className="step-number">
                        <span>{number}</span> of 5
                    </Col>
                </Row>
                <Row>
                    <Col className="p-0">
                        <LoaderBar />
                    </Col>
                </Row>
                <Row>
                    <Col className="p-0">
                        {textHeading ? (
                            <h3 className="modal-title-heading">
                                {textHeading}
                            </h3>
                        ) : null}
                        <p className="modal-title-text">{text}</p>{' '}
                    </Col>
                </Row>
            </BootstrapModal.Title>
            <BootstrapModal.Body>
                <Row>
                    <Col xs={12} lg={12}>
                        <ButtonComponent
                            type={ButtonTypes.Primary}
                            size={ButtonSizes.LG}
                            className="wallet-modal-button"
                        >
                            {'Next'}
                        </ButtonComponent>
                    </Col>
                </Row>
            </BootstrapModal.Body>
        </BootstrapModal>
    )
}

export default WalletModal
