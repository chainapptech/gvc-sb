import React from 'react'
import { Modal as BootstrapModal, Row, Col, Image } from 'react-bootstrap'
import CardButton from '../CardButton'
import './styles.scss'
import Avatar from '../../assets/images/profile-avatar.svg'

function ProfileCard({
    onClick,
    buttonText,
    title,
    profileName,
    profileJob,
    avatar,
}) {
    return (
        <BootstrapModal.Dialog centered className="profile-card">
            <BootstrapModal.Title>{title || 'Profile'}</BootstrapModal.Title>
            <BootstrapModal.Body>
                <Row className="content-row g-0 m-0">
                    <Col className="d-flex align-content-center justify-content-start align-items-center g-0 m-0 content-col">
                        <Image
                            src={avatar ? avatar : Avatar}
                            className="profile-card-avatar"
                        ></Image>
                        <Row className="d-flex m-0 p-0 g-0 flex-column profile-card-description">
                            <Col className="d-flex g-0 m-0 justify-content-start align-content-center name-description">
                                <p className="profile-card-profile-name">
                                    {profileName || 'Profile Name'}
                                </p>
                            </Col>
                            <Col className="d-flex justify-content-start align-content-center g-0 m-0 p-0 job-description">
                                <p className="profile-card-job-description">
                                    {profileJob || 'Profile Job'}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="bottom-part">
                    <CardButton
                        onClick={onClick}
                        className={'profile-card-button-text'}
                    >
                        {buttonText}
                    </CardButton>
                </Row>
            </BootstrapModal.Body>
        </BootstrapModal.Dialog>
    )
}

export default ProfileCard
