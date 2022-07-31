import Spinner from 'react-bootstrap/Spinner';
import styles from './LoadingSpinner.module.css'


const LoadingSpinner = () => {

return (
    <Spinner className={styles["spinner"]} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
    </Spinner>
        )
}

export default LoadingSpinner;