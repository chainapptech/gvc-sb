import React from 'react'
import { Form } from 'react-bootstrap'
import './styles.scss'

const Checkbox = ({
    label,
    checked,
    onChange,
    className,
    size,
    reverse,
    disabled,
    indeterminate,
}) => {
    const setCheckboxRef = (checkbox) => {
        if (checkbox) {
            checkbox.indeterminate = { indeterminate }
        }
    }

    return (
        <Form.Check
            ref={setCheckboxRef}
            checked={checked}
            onChange={onChange}
            className={`checkbox-wrapper ${className} form-check-${
                size === 'small' ? 'sm' : ''
            }`}
            type={'checkbox'}
            id={`default-checkbox`}
            reverse={reverse}
            disabled={disabled}
            label={label}
        />
    )
}

Checkbox.defaultProps = {
    checked: false,
    reverse: false,
    size: 'default',
    disabled: false,
    indeterminate: false,
}

export default Checkbox
