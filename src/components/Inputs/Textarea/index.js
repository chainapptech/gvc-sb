import React from 'react'
import Form from 'react-bootstrap/Form'

import './styles.scss'

const Textarea = ({ label, placeholder, capture }) => {
    return (
        <>
            <Form.Group className="mb-3">
                <Form.Label>{label}</Form.Label>
                <Form.Text>{capture}</Form.Text>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder={placeholder}
                    
                />
            </Form.Group>
        </>
    )
}

export default Textarea
