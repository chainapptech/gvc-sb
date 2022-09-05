import React from 'react'

import warningIcon from '../../assets/images/warningIcon.svg'
import './styles.scss'

const WarningMessage = ({ label }) => {
    return (
        <div className="message">
            <span className="message-text">
                <img src={warningIcon} alt="warning" />
                {label}
            </span>
        </div>
    )
}

export default WarningMessage
