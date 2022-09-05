import React from 'react'
import { Modal as BootstrapModal } from 'react-bootstrap'
import ButtonComponent from '../Button'

import './styles.scss'

const SmallModal = ({ show }) => {
    return (
        <BootstrapModal show={show} backdrop centered>
            <BootstrapModal.Header closeButton></BootstrapModal.Header>
            <BootstrapModal.Title>Are you sure?</BootstrapModal.Title>
            <BootstrapModal.Body>
                <div>
                    <p className="modal-text">
                        Are you sure you want to cancel? Any progress won’t be
                        saved.
                    </p>
                </div>
                <div className="d-flex">
                    <ButtonComponent
                        className={`button-component btn-ghost btn-md d-flex align-items-center justify-content-center gx-2 me-3`}
                    >
                        {'No, continue'}
                    </ButtonComponent>
                    <ButtonComponent
                        className={`button-component btn-primary btn-md d-flex align-items-center justify-content-center gx-2`}
                    >
                        {'Yes, cancel'}
                    </ButtonComponent>           
                </div>
            </BootstrapModal.Body>
        </BootstrapModal>
    )
}

export default SmallModal
