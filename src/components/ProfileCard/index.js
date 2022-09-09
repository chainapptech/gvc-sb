import React from 'react'
import { Modal as BootstrapModal, Row, Col, Image } from 'react-bootstrap'
import CardButton from '../CardButton'
import './styles.scss'
import Avatar from '../../assets/images/profile-avatar.svg'
import PropTypes from 'prop-types'
import ButtonComponent, { ButtonTypes } from '../Button'
import CopyIcon from '../../assets/svg/CopyIcon/CopyIcon'

const DEFAULT_CONTENT_TEXT = 'Card content text'
const DEFAULT_PROFILE_JOB = 'Profile Job'
const DEFAULT_PROFILE_NAME = 'Profile Name'
const DEFAULT_TITLE = 'Profile'

function ProfileCard({
    onClick,
    buttonText,
    title,
    profileName,
    profileJob,
    avatar,
    contentText,
    profile,
    buttonIcon,
}) {
    return (
        <BootstrapModal.Dialog centered className="profile-card">
            <BootstrapModal.Title>
                {title || DEFAULT_TITLE}
            </BootstrapModal.Title>
            <BootstrapModal.Body>
                <Row className="content-row g-0 m-0">
                    {profile ? (
                        <Col className="d-flex align-content-center justify-content-start align-items-center g-0 m-0 content-col">
                            <Image
                                src={avatar ? avatar : Avatar}
                                className="profile-card-avatar"
                            ></Image>
                            <Row className="d-flex m-0 p-0 g-0 flex-column profile-card-description">
                                <Col className="d-flex g-0 m-0 justify-content-start align-content-center name-description">
                                    <p className="profile-card-profile-name">
                                        {profileName || DEFAULT_PROFILE_NAME}
                                    </p>
                                </Col>
                                <Col className="d-flex justify-content-start align-content-center g-0 m-0 p-0 job-description">
                                    <p className="profile-card-job-description">
                                        {profileJob || DEFAULT_PROFILE_JOB}
                                    </p>
                                </Col>
                            </Row>
                        </Col>
                    ) : (
                        <Col className="d-flex flex-column align-content-center justify-content-start align-items-center g-0 m-0 content-col">
                            <p className="card-content-text">
                                {contentText
                                    ? contentText
                                    : DEFAULT_CONTENT_TEXT}
                            </p>
                        </Col>
                    )}
                </Row>
                <Row className="bottom-part">
                    {profile ? (
                        <CardButton
                            onClick={onClick}
                            className={'profile-card-button-text'}
                        >
                            {buttonText}
                        </CardButton>
                    ) : (
                        <ButtonComponent
                            leadingIcon={buttonIcon ? buttonIcon : <CopyIcon />}
                            type={ButtonTypes.Ghost}
                            className={'not-profile-card-button'}
                            onClick={onClick}
                        >
                            {buttonText}
                        </ButtonComponent>
                    )}
                </Row>
            </BootstrapModal.Body>
        </BootstrapModal.Dialog>
    )
}

ProfileCard.propTypes = {
    profile: PropTypes.bool,
    onClick: PropTypes.func,
}

export default ProfileCard
