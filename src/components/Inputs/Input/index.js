import React from 'react'
import Form from 'react-bootstrap/Form'

import './styles.scss'

const Input = ({ label, placeholder, type }) => {
    return (
        <>
            <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
            <Form.Control type={type} placeholder={placeholder} />
        </>
    )
}

export default Input
