import { Alert } from "react-bootstrap"
import { useNavigate } from 'react-router-dom';
import styles from './AddFestival.module.css';
import * as festivalService from '../../services/festivalService';
import { useAuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import { types, useNotificationContext } from "../../context/NotificationContext";
// import { useState } from 'react';
// import { useEffect } from 'react';


const AddFestival = () => {

    const { addNotification } = useNotificationContext();

    const [values, setValues] = useState({
        festivalName: '',
        imgUrlFest: '',
        summary: '',
        date: '', 
        location: '',
        imgUrlLoc: '',
        ticketPrice: ''
    });

    const [errors, setErrors] = useState({festivalName:false, imgUrlFest: false, summary: false, date: false, location: false, imgUrlLoc: false, ticketPrice: false})

    const navigate = useNavigate();
    // const [location, setLocation] = useState([])

    const { user } = useAuthContext();

    
    let ownerId = user.id;

    const changeHandler = (e) => {
        setValues(state=> ({
            ...state, 
            [e.target.name] : e.target.value
    }))
    }



    function onFestivalAdd(e) {
        e.preventDefault();

        festivalService.addFestival(
            values,
            ownerId
        )
            .then(festival => {
                addNotification('You added new festival!', types.success);
                navigate('/home');
            })

    }


    const festivalErrorHandler = (e) => {
        e.preventDefault();

        let current = e.target.value;

        if (current.length < 6) {
            setErrors(state => ({ ...state, festivalName: 'Festival name sould be at least 6 characters!' }))
        } else if (current.length > 20) {
            setErrors(state => ({ ...state, festivalName: 'Festival name sould be max 20 characters!' }))
        } else {
            setErrors(state => ({ ...state, festivalName: false }));
        }
    }

    const imgErrorhandler = (e) => {
        e.preventDefault();

        let current = e.target.value;

        if (!current.includes('https://')) {
            if(e.target.name === 'imgUrlFest') {
                setErrors(state => ({ ...state, imgUrlFest: 'Image sould be valid url address!' }))
            } else {
                setErrors(state => ({ ...state, imgUrlLoc: 'Image sould be valid url address!' }))
            }
            
        } else {
            if(e.target.name === 'imgUrlFest') {
                setErrors(state => ({ ...state, imgUrlFest: false }));
            } else {
                setErrors(state => ({ ...state, imgUrlLoc: false }));
            }
            
        }
    }

    const summaryErrorHandler = (e) => {
        e.preventDefault();

        let current = e.target.value;

        if(current.length < 10) {
            setErrors(state => ({...state, summary:'Summary should be at least 10 charachters long!'}))
        } else if (current.length > 20) {
            setErrors(state => ({ ...state, summary: 'Summary should be max 20 charachters long!' }))
        } else {
            setErrors(state => ({ ...state, summary: false }));
        }
    }

    const dateErrorHandler = (e) => {
        e.preventDefault();

        let current = e.target.value;

        if(current.length < 4) {
            setErrors(state => ({...state, date:'Dates should be at least 4 charachters long!'}))
        } else if (current.length > 21) {
            setErrors(state => ({ ...state, date: 'Dates should be max 21 charachters long!' }))
        } else {
            setErrors(state => ({ ...state, date: false }));
        }
    }

    const locationErrorHandler = (e) => {
        e.preventDefault();

        let current = e.target.value;

        if(current.length < 4) {
            setErrors(state => ({...state, location:'Location should be at least 4 charachters long!'}))
        } else if (current.length > 20) {
            setErrors(state => ({ ...state, location: 'Location should be max 20 charachters long!' }))
        } else {
            setErrors(state => ({ ...state, location: false }));
        }
    }

    const priceErrorhandler = (e) => {
        e.preventDefault();

        let number = Number(e.target.value);
    

        // let current = Number(e.target.value);

        // if(current === isNaN) {
        //     setErrors(state => ({...state, ticketPrice:'Ticket price should be a number!'}))
        // } else {
        //     setErrors(state => ({ ...state, ticketPrice: false }));
        // }
    }

    const isFormValid = !Object.values(errors).some(x => x)



    // useEffect(() => {
    //     festivalService.getAll()
    //         .then(festivals => {
    //             setLocation(festivals.map(x => x.location))
    //             console.log(location)
    //         })
    // }, [location])

    return (
        <form method="POST" autoComplete='off' autoCorrect='off' autoSave='off' className={styles["add-festival"]} onSubmit={onFestivalAdd}>
            <article className={styles["festival-wrapper"]}>
                <h1 className={styles["add-festival-title"]}>Add new festival</h1>
                <i className="fa-solid fa-music"></i>
                <label htmlFor="fest-title-title">Music Festival:</label>
                <input type="text" name="festivalName" className={styles["add-fest-title"]} value={values.festivalName} onChange={changeHandler} onBlur={festivalErrorHandler} placeholder="Varna Summer" />
                <Alert className={styles['alert']} variant="danger" show={Boolean(errors.festivalName)}>{errors.festivalName}</Alert>
                <label htmlFor="fest-img">Music Festival Image:</label>
                <input type="url" name="imgUrlFest" className={styles["fest-img"]} placeholder="https://..." value={values.imgUrlFest} onChange={changeHandler} onBlur={imgErrorhandler} />
                <Alert className={styles['alert']} variant="danger" show={Boolean(errors.imgUrlFest)}>{errors.imgUrlFest}</Alert>
                <label htmlFor="summary">Summary:</label>
                <input type="text" name="summary" className={styles["summary"]} placeholder="Music Festival in Varna!" value={values.summary} onBlur={summaryErrorHandler} onChange={changeHandler} />
                <Alert className={styles['alert']} variant="danger" show={Boolean(errors.summary)}>{errors.summary}</Alert>
                <label htmlFor="dates">Date:</label>
                <input type="text" className={styles["dates"]} name="date" placeholder="01.06.2022-03.06.2022" value={values.date} onBlur={dateErrorHandler} onChange={changeHandler} />
                <Alert className={styles['alert']} variant="danger" show={Boolean(errors.date)}>{errors.date}</Alert>
                <label htmlFor="fest-city">Location:</label>
                <input type="text" className={styles["fest-city"]} name="location" placeholder="Varna" value={values.location} onBlur={locationErrorHandler} onChange={changeHandler}  />
                <Alert className={styles['alert']} variant="danger" show={Boolean(errors.location)}>{errors.location}</Alert>
                <label htmlFor="fest-city-img">Location Image:</label>
                <input type="url" className={styles["fest-city-img"]} name="imgUrlLoc" placeholder="https://..." value={values.imgUrlLoc} onBlur={imgErrorhandler} onChange={changeHandler} />
                <Alert className={styles['alert']} variant="danger" show={Boolean(errors.imgUrlLoc)}>{errors.imgUrlLoc}</Alert>
                <label htmlFor="fest-price">Ticket Price:</label>
                <input type="text" className={styles["fest-price"]} name="ticketPrice" placeholder="25lv" value={values.ticketPrice} onBlur={priceErrorhandler} onChange={changeHandler} />
                <Alert className={styles['alert']} variant="danger" show={Boolean(errors.ticketPrice)}>{errors.ticketPrice}</Alert>
                <div className={styles["btn-add-fest"]}>
                    <button disabled={!isFormValid} className={styles["fest-btn"]} type="submit">Add festval</button>
                </div>
            </article>
        </form>
    );
}

export default AddFestival;