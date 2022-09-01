import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LoaderBar from '../LoaderBar'

import './styles.scss'

const ProgressBarItem = () => {
    return (
        <div className="voting-phase">
            <Row className="align-items-lg-center justify-content-lg-between">
                <Col className="d-flex align-items-center">
                    <h4 className="progress-bar-heading pe-2 mb-0">Fund 8</h4>
                    <p className="progress-bar-text mb-0">Innovation</p>
                </Col>
                <Col className="d-lg-flex justify-content-lg-end progress-bar-text d-none d-md-none">
                    <p className="mb-0">
                        <span className="progress-bar-timer pe-1">
                            20d 10hs 32m
                        </span>
                        until end of registration
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <LoaderBar now={40} />
                </Col>
            </Row>

            <Row>
                <Col className="d-lg-flex progress-bar-text d-md-block d-lg-none d-xl-none d-block">
                    <p>
                        <span className="pe-1 progress-bar-timer">
                            20d 10hs 32m
                        </span>
                        until end of registration
                    </p>
                </Col>
            </Row>
        </div>
    )
}

export default ProgressBarItem
