import React from 'react'
import Form from 'react-bootstrap/Form'

import './styles.scss'

const Input = ({ label, placeholder, value, readOnly, type }) => {
    return (
        <>
            {label ? (
                <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
            ) : null}
            <Form.Control
                type={type}
                placeholder={placeholder}
                value={value}
                readOnly={readOnly}
            />
        </>
    )
}

export default Input
