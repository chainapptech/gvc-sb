import { useRef, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'
import CardItem from '../../components/Card'
import VotingPhase from '../../components/VotingPhase'
import DropdownNav from '../../components/Dropdown'
import Modal from '../../components/Modal'

import './styles.scss'

import CardImage1 from '../../assets/images/card-background-1.png'
import CardImage2 from '../../assets/images/card-background-2.png'
import CardImage3 from '../../assets/images/card-background-3.png'
import CardImage4 from '../../assets/images/card-background-4.png'

const Homepage = () => {
    const [isConnectClicked, setIsConnectClicked] = useState(false)
    const [connectedWallet, setConnectedWallet] = useState(null)

    const onClose = () => setIsConnectClicked(false)

    return (
        <Container fluid className="container-wrapper mvh-100 g-0 relative">
            {isConnectClicked ? (
                <Modal
                    show={isConnectClicked}
                    setConnectedWallet={setConnectedWallet}
                    onClose={onClose}
                />
            ) : null}

            <Header
                setIsConnectClicked={setIsConnectClicked}
                connectedWallet={connectedWallet}
            />

            <Row className="g-0">
                <Col md={3} className="pe-lg-0 pt-md-5 d-none d-md-block">
                    <Sidebar />
                </Col>
                <Col sm={12} md={9} className="pt-3 px-md-0">
                    <Row>
                        <Col sm={12} className="pe-lg-0 d-md-none d-block">
                            <DropdownNav className={'w-100 pt-3'} />
                        </Col>
                        <Col sm={12}>
                            <CardItem
                                className="card-item-single"
                                img={CardImage1}
                                variant={'left'}
                                title={'Voting Center'}
                                content={
                                    'Help to grow the Cardano community by becoming an active voter, delegate your vote or even by putting yourself up there so people can delegate their voting power to you!'
                                }
                            />
                            <CardItem
                                className="card-item-single"
                                buttonText={'Register as an active voter'}
                                img={CardImage2}
                                variant={'left'}
                                title={
                                    'Use your voting power by registering to vote'
                                }
                                content={
                                    'Lorem ipsum dolor sit amet, consectetur ad ipiscing elit. Aliquam rutrum molestie lectus, eget volutpat sem venenatis quis.'
                                }
                            />
                            <CardItem
                                className="card-item-single"
                                buttonText={'Delegate your vote'}
                                img={CardImage3}
                                variant={'right'}
                                title={'Delegate your voting power to dReps'}
                                content={
                                    'Lorem ipsum dolor sit amet, consectetur ad ipiscing elit. Aliquam rutrum molestie lectus, eget volutpat sem venenatis quis.'
                                }
                            />
                            <CardItem
                                className="card-item-single"
                                buttonText={'Become a dRep'}
                                img={CardImage4}
                                variant={'left'}
                                title={
                                    'Let other people delegate their voting power to you'
                                }
                                content={
                                    'Lorem ipsum dolor sit amet, consectetur ad ipiscing elit. Aliquam rutrum molestie lectus, eget volutpat sem venenatis quis.'
                                }
                            />
                            <VotingPhase />
                            <Footer />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Homepage
