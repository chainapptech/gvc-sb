import React from 'react'

import warningIcon from '../../../assets/images/warningIcon.svg'
import './styles.scss'

const ErrorNotice = ({ label }) => {
    return (
        <div className="error-notice message">
            <span className="message-text">
                <img src={warningIcon} alt="warning" />
                {label}
            </span>
        </div>
    )
}

export default ErrorNotice
