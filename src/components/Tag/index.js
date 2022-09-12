import React from 'react'
import './styles.scss'
import { Button } from 'react-bootstrap'

function TagComponent({ children, onClick, className, endIcon }) {
    return (
        <Button
            onClick={onClick}
            className={`tag-component ${className} d-flex align-items-center justify-content-center`}
        >
            {children}
            {endIcon && endIcon}
        </Button>
    )
}

export default TagComponent
