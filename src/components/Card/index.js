import React from 'react'

import Card from 'react-bootstrap/Card'
import { Col, Row } from 'react-bootstrap'
import CardButton from '../CardButton'

import './styles.scss'

const CardItem = ({
    title,
    content,
    img,
    variant,
    buttonText,
    votingPhase,
    subcontent,
    onClick,
    className,
    cardHeight,
}) => {
    return (
        <Card
            className={`border-0 main-card-item mb-3 mt-3 mt-md-0 ${cardHeight}`}
        >
            <Card.Body
                style={{
                    backgroundImage: `url(${img})`,
                    backgroundSize: 'cover',
                    borderRadius: '8px',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    backgroundPosition: 'center',
                }}
            >
                <Row className={`h-100 card-item-content ${className}`}>
                    {variant === 'left' ? (
                        <>
                            <Col
                                sm={12}
                                lg={8}
                                className="d-flex flex-column justify-content-center"
                            >
                                <Card.Title>{title}</Card.Title>
                                <p>{content}</p>
                                {buttonText ? (
                                    <CardButton className={'mt-3'}>
                                        {buttonText}
                                    </CardButton>
                                ) : null}
                            </Col>
                        </>
                    ) : (
                        <>
                            <Col lg={4} md={12}></Col>
                            <Col
                                md={12}
                                lg={8}
                                className="d-flex flex-column justify-content-center"
                            >
                                <Card.Title>{title}</Card.Title>
                                <p>{content}</p>
                                {buttonText ? (
                                    <CardButton className={'mt-3'}>
                                        {buttonText}
                                    </CardButton>
                                ) : null}
                            </Col>
                        </>
                    )}
                </Row>
            </Card.Body>
        </Card>
    )
}

export default CardItem
