import { useState } from 'react'
import { Row, Col, Image } from 'react-bootstrap'
import Tag from '../Tag'
import Avatar from '../../assets/images/Avatar.png'
import RightArrow from '../../assets/svg/RightArrow'
import CloseIcon from '../../assets/svg/CloseIcon'

import './styles.scss'
const DrepItem = ({ drep }) => {
    const [isHovered, setIsHovered] = useState(false)
    const [isSelected, setIsSelected] = useState(false)

    const handleHover = (e) =>
        e.type === 'mouseenter' ? setIsHovered(true) : setIsHovered(false)

    const handleSelect = () => isSelected === false && setIsSelected(true)

    const handleDeselect = () => isSelected === true && setIsSelected(false)

    return (
        <Row>
            <Col
                className="drep-item d-flex align-items-start align-items-md-center justify-content-between flex-column flex-md-row"
                onMouseEnter={handleHover}
                onMouseLeave={handleHover}
                onClick={handleSelect}
            >
                <div className="d-flex align-items-center">
                    <Image fluid src={Avatar} alt="Catalyst Logo" />

                    <Row>
                        <Col className="drep-text-info">
                            <p className="mb-0 drep-name">{drep.name}</p>
                            <p className="mb-0 drep-description">
                                {drep.headline}
                            </p>
                        </Col>
                    </Row>
                </div>
                {isSelected ? (
                    <div className="d-flex align-items-start align-items-md-end flex-column">
                        <div className="d-flex mt-2 mt-md-0">
                            {drep.tags.map(({ id, tag }) => (
                                <Tag key={id}>{tag.name}</Tag>
                            ))}
                        </div>
                        <Tag
                            className={'deselect-tag'}
                            onClick={handleDeselect}
                            endIcon={<CloseIcon />}
                        >
                            Deselect
                        </Tag>
                    </div>
                ) : isHovered ? (
                    <div className="d-none d-md-block">
                        <RightArrow />
                    </div>
                ) : (
                    <div className="d-flex mt-2 mt-md-0">
                        {drep.tags.map(({ id, tag }) => (
                            <Tag key={id}>{tag.name}</Tag>
                        ))}
                    </div>
                )}
            </Col>
        </Row>
    )
}

export default DrepItem
