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
                        title={<h3>Phase 1</h3>}
                        content={
                            'Voters have to register their wallets in order to vote in Funds. You are already registered!'
                        }
                        className={'p-2'}
                        cardHeight={'h-100'}
                    />
                </Col>
                <Col sm={12} md={4} className="d-none d-md-block d-lg-block">
                    <CardItem
                        img={CardImage2}
                        variant={'left'}
                        title={<h3>Phase 2</h3>}
                        content={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl nibh.'
                        }
                        className={'p-2'}
                        cardHeight={'h-100'}
                    />
                </Col>
                <Col sm={12} md={4} className="d-none d-md-block d-lg-block">
                    <CardItem
                        img={CardImage3}
                        variant={'left'}
                        title={<h3>Phase 3</h3>}
                        content={
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nisl nibh.'
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
