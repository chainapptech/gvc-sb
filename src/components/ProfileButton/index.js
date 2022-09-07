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
        <div className="profile-container">
            <div className="profile-button" onClick={handleClick}>
                <img src={avatar} alt="profile-avatar" />
                <div className="balance-wrapper">
                    <p className="balance">{value}</p>
                    <p className="address">{adressName}</p>
                </div>
                <img src={threeDots} alt="dots" />
            </div>
            {showItems ? (
                <ul className="profile-button-items d-flex flex-column align-items-start">
                    <li>My dashboard</li>
                    <li>Disconect</li>
                </ul>
            ) : null}
        </div>
    )
}

export default ProfileButton
