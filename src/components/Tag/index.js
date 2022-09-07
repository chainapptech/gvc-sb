import React from 'react'
import './styles.scss'
import { Button } from 'react-bootstrap'

function TagComponent({ children, onClick, className }) {
    return (
        <Button
            onClick={onClick}
            className={`tag-component ${className} d-flex align-items-center justify-content-center`}
        >
            {children}
        </Button>
    )
}

export default TagComponent
