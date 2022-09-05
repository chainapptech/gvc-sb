import React from 'react'
import Form from 'react-bootstrap/Form'

import './styles.scss'

const DisabledInput = ({ label, placeholder, type }) => {
    return (
        <>
            <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
            <Form.Control type={type} disabled />
        </>
    )
}

export default DisabledInput
