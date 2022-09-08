import React from 'react'
import { Modal as BootstrapModal } from 'react-bootstrap'
import CardButton from '../CardButton'
import ModalBackButton from '../../assets/svg/ModelBackButton/ModalBackButton'
import '../../assets/svg/ModelBackButton/ModelBackButton.scss'

import './styles.scss'
import PropTypes from 'prop-types'

const LargeModal = ({ show, textHeading, backButton }) => {
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
                <CardButton>{'Next'}</CardButton>
            </BootstrapModal.Footer>
        </BootstrapModal>
    )
}

LargeModal.propTypes = {
    show: PropTypes.bool,
    backButton: PropTypes.bool,
}

export default LargeModal
