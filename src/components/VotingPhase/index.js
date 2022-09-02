import React from 'react'
import './styles.scss'
import CardItem from '../Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBarItem from '../ProgressBarItem'

import CardImage1 from '../../assets/images/card-background-5.png'
import CardImage2 from '../../assets/images/card-background-6.png'
import CardImage3 from '../../assets/images/card-background-7.png'

const VotingPhase = () => {
    return (
        <>
            <Row className="g-0">
                <Col>
                    <h2 className="voting-phase-heading py-lg-2">
                        Voting Phase
                    </h2>
                    <ProgressBarItem />
                </Col>
            </Row>
            <Row className="gy-3 mb-5 pb-4">
                <Col sm={12} md={4}>
                    <CardItem
                        img={CardImage1}
                        variant={'left'}
                        title={
                            <h3 className="voting-phase-card-heading">
                                Phase 1 <br />
                                <span className="voting-phase-card-subheading">
                                    Registration
                                </span>
                            </h3>
                        }
                        content={
                            <p className="voting-phase-card-text">
                                Voters have to register their wallets in order
                                to vote in Funds. You are already registered!
                            </p>
                        }
                        className={'p-2'}
                        cardHeight={'h-100'}
                    />
                </Col>
                <Col sm={12} md={4} className="d-none d-md-none d-lg-block">
                    <CardItem
                        img={CardImage2}
                        variant={'left'}
                        title={
                            <h3 className="voting-phase-card-heading">
                                Phase 2 <br />
                                <span className="voting-phase-card-subheading">
                                    Snapshot
                                </span>
                            </h3>
                        }
                        className={'p-2'}
                        cardHeight={'h-100'}
                    />
                </Col>
                <Col sm={12} md={4} className="d-none d-md-none d-lg-block">
                    <CardItem
                        img={CardImage3}
                        variant={'left'}
                        title={
                            <h3 className="voting-phase-card-heading">
                                Phase 3 <br />
                                <span className="voting-phase-card-subheading">
                                    Voting
                                </span>
                            </h3>
                        }
                        className={'p-2'}
                        cardHeight={'h-100'}
                    />
                </Col>
            </Row>
        </>
    )
}

export default VotingPhase
