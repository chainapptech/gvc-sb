import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'

import './styles.scss'

const ComboInput = ({ label, placeholder }) => {
    return (
        <>
            <Form.Label htmlFor="inputPassword5">{label}</Form.Label>
            <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    placeholder={placeholder}
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </>
    )
}

export default ComboInput
