import React, { useState } from 'react'

import avatar from '../../assets/images/Avatar.png'
import threeDots from '../../assets/images/threeDots.svg'

import './styles.scss'

const ProfileButton = ({ value, adressName }) => {
    const [showItems, setShowItems] = useState(false)

    const handleClick = () => {
        setShowItems((prevState) => !prevState)
    }
    return (
        <div className="d-flex flex-column">
            <div className="profile-button" onClick={handleClick}>
                <img src={avatar} alt="profile-avatar" />
                <div className="balance-wrapper me-4">
                    <p className="balance">{value}</p>
                    <p className="address">{adressName}</p>
                </div>
                <img src={threeDots} alt="dots" />
            </div>
            {/* fix style of list items */}
            {showItems ? (
                <div className="profile-button-item d-flex flex-column justify-content-start">
                    <div className="text-wrapper">
                        <p>My dashboard</p>
                    </div>
                    <div>
                        <p>Disconect</p>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default ProfileButton
