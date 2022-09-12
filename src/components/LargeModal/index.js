import React from 'react'
import { Col, Modal as BootstrapModal, Row } from 'react-bootstrap'
import CardButton from '../CardButton'
import ModalBackButton from '../../assets/svg/ModelBackButton/ModalBackButton'
import '../../assets/svg/ModelBackButton/ModelBackButton.scss'

import './styles.scss'
import PropTypes from 'prop-types'
import ButtonComponent, { ButtonTypes } from '../Button'

const LargeModal = ({
    show,
    textHeading,
    backButton,
    buttonText,
    secondButtonText,
    onClick,
    secondOnClick,
}) => {
    return (
        <BootstrapModal
            show={show}
            backdrop
            centered
            dialogClassName="large-modal"
        >
            <BootstrapModal.Header
                closeButton
                className={backButton ? 'header-normal' : 'header-reverse'}
            >
                {backButton ? <ModalBackButton /> : null}
            </BootstrapModal.Header>
            {textHeading ? (
                <BootstrapModal.Title>{textHeading}</BootstrapModal.Title>
            ) : null}
            <BootstrapModal.Body></BootstrapModal.Body>

            <BootstrapModal.Footer>
                {secondButtonText ? (
                    <Row className="w-100">
                        <Col>
                            <ButtonComponent
                                type={ButtonTypes.Ghost}
                                className={'w-100 button-styles'}
                            >
                                {secondButtonText}
                            </ButtonComponent>
                        </Col>
                        <Col>
                            <ButtonComponent
                                type={ButtonTypes.Primary}
                                className={'w-100 button-styles'}
                            >
                                {buttonText}
                            </ButtonComponent>
                        </Col>
                    </Row>
                ) : (
                    <ButtonComponent
                        type={ButtonTypes.Primary}
                        className={'w-100 button-styles'}
                    >
                        {buttonText}
                    </ButtonComponent>
                )}
            </BootstrapModal.Footer>
        </BootstrapModal>
    )
}

LargeModal.propTypes = {
    show: PropTypes.bool,
    secondButtonText: PropTypes.string,
    backButton: PropTypes.bool,
}

export default LargeModal
