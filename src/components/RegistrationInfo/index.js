import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonComponent, {
    ButtonTypes,
    ButtonVariants,
    ButtonSizes,
} from '../Button'
import ErrorNotice, {
    label,
    errorNotice,
    drepButtonText,
} from '../Notices/ErrorNotice'

import './styles.scss'

const RegistrationInfo = ({ drepHeading, drepText }) => {
    return (
        <Row>
            <Col className="d-flex justify-content-center align-items-md-center drep-wrapper">
                <Row className="drep-content flex-column ">
                    <div>
                        <Col>
                            <h2 className="drep-heading text-center">
                                {drepHeading}
                            </h2>
                        </Col>
                        <Col className="d-flex justify-content-center">
                            {drepText ? (
                                <h2 className="drep-text text-center">
                                    {drepText}
                                </h2>
                            ) : (
                                <ErrorNotice
                                    label={
                                        'We encountered a connection issue whilst creating your account'
                                    }
                                />
                            )}
                        </Col>
                    </div>
                    <Col className="d-flex justify-content-md-center justify-content-end align-items-end align-items-md-start drep-btn-wrapper">
                        <ButtonComponent
                            type={ButtonTypes.Primary}
                            variant={ButtonVariants.Default}
                            size={ButtonSizes.MD}
                        >
                            {drepButtonText}
                        </ButtonComponent>
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

export default RegistrationInfo
