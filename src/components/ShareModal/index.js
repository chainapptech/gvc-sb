import React, { useState } from 'react'
import './styles.scss'

import { Col, Modal as BootstrapModal, Row } from 'react-bootstrap'
import ButtonComponent, { ButtonTypes, ButtonVariants } from '../Button'
import CardButton from '../CardButton'
import Input from '../Inputs/Input'
import RssIcon from '../../assets/svg/RssIcon'
import WebIcon from '../../assets/svg/WebIcon'
import FacebookIcon from '../../assets/svg/FacebookIcon'

const MODAL_TITLE = 'Share'
const MODAL_BODY = 'Share this profile on'

function ShareModal({ show, value }) {
    const [inputValue, setInputValue] = useState(value)

    function onClick() {
        navigator.clipboard.writeText(inputValue)
    }

    return (
        <BootstrapModal show={show} backdrop centered className="share-modal">
            <BootstrapModal.Header closeButton></BootstrapModal.Header>
            <BootstrapModal.Title>{MODAL_TITLE}</BootstrapModal.Title>
            <BootstrapModal.Body>
                <div>
                    <p className="modal-text">{MODAL_BODY}</p>
                </div>
                <Row className="icons-row gx-0">
                    <Col>
                        <ButtonComponent
                            variant={ButtonVariants.IconButton}
                            type={ButtonTypes.Ghost}
                            className="radius-16 icon-height"
                            iconButton={<RssIcon />}
                        ></ButtonComponent>
                    </Col>
                    <Col>
                        <ButtonComponent
                            variant={ButtonVariants.IconButton}
                            type={ButtonTypes.Ghost}
                            className="radius-16 icon-height"
                            iconButton={<WebIcon />}
                        ></ButtonComponent>
                    </Col>
                    <Col>
                        <ButtonComponent
                            variant={ButtonVariants.IconButton}
                            type={ButtonTypes.Ghost}
                            className="radius-16 icon-height"
                            iconButton={<FacebookIcon />}
                        ></ButtonComponent>
                    </Col>
                    <Col>
                        <ButtonComponent
                            variant={ButtonVariants.IconButton}
                            type={ButtonTypes.Ghost}
                            className="radius-16 icon-height"
                            iconButton={<FacebookIcon />}
                        ></ButtonComponent>
                    </Col>
                </Row>
                <Row className="bottom-part">
                    <Input
                        value={inputValue}
                        readOnly={true}
                        id="input-clipboard"
                    ></Input>
                    <CardButton onClick={onClick}>Copy link!</CardButton>
                </Row>
            </BootstrapModal.Body>
        </BootstrapModal>
    )
}

export default ShareModal
