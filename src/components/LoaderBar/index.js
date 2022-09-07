import ProgressBar from 'react-bootstrap/ProgressBar'

import './styles.scss'

const LoaderBar = ({ now }) => {
    return <ProgressBar now={40} className="progress-bar-loader" />
}

export default LoaderBar
