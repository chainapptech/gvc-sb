import React from 'react'
import { Modal as BootstrapModal } from 'react-bootstrap'
import ButtonComponent, { ButtonSizes, ButtonTypes } from '../Button'

import './styles.scss'

const SmallModal = ({ show }) => {
    return (
        <BootstrapModal show={show} backdrop centered className="small-modal">
            <BootstrapModal.Header closeButton></BootstrapModal.Header>
            <BootstrapModal.Title>Are you sure?</BootstrapModal.Title>
            <BootstrapModal.Body>
                <div>
                    <p className="small-modal-text">
                        Are you sure you want to cancel? Any progress won’t be
                        saved.
                    </p>
                </div>
                <div className="d-flex">
                    <ButtonComponent
                        type={ButtonTypes.Ghost}
                        size={ButtonSizes.MD}
                        className={`me-3`}
                    >
                        {'No, continue'}
                    </ButtonComponent>
                    <ButtonComponent
                        type={ButtonTypes.Primary}
                        size={ButtonSizes.MD}
                    >
                        {'Yes, cancel'}
                    </ButtonComponent>
                </div>
            </BootstrapModal.Body>
        </BootstrapModal>
    )
}

export default SmallModal
