import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ButtonComponent, {
    ButtonTypes,
    ButtonSizes,
    ButtonVariants,
} from '../Button'
import PlusSign from '../../assets/svg/PlusSign'

import './styles.scss'

const WalletStats = ({ stakedAdaValue, delegatedADAvalue, stakedAdaName }) => {
    return (
        <Row className="flex-column flex-start">
            <Col className="p-0">
                <p className="adaWallet-text-top m-0">{stakedAdaName}</p>
            </Col>
            <Col className="p-0">
                <p className="adaWallet-text-middle m-0">{stakedAdaValue}</p>
            </Col>
            <Col className="p-0">
                <p className="adaWallet-text-bottom m-0">{delegatedADAvalue}</p>
            </Col>
            <ButtonComponent
                variant={ButtonVariants.IconButton}
                type={ButtonTypes.Ghost}
                size={ButtonSizes.XS}
                iconButton={<PlusSign />}
            />
        </Row>
    )
}

export default WalletStats
