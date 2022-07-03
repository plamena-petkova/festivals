import { useNavigate } from 'react-router-dom';
import './addFestival.css'
import * as festivaService from '../../services/festivalService';
import { useAuthContext } from '../../context/AuthContext';

const AddFestival = () => {

    const navigate = useNavigate();

    const { user } = useAuthContext();

    let ownerId = user.id;


    function onFestivalAdd(e) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        const festivalName = formData.get('festivalName');
        const imgUrlFest = formData.get('imgUrlFest');
        const summary = formData.get('summary');
        const date = formData.get('date');
        const location = formData.get('location');
        const imgUrlLoc = formData.get('imgUrlLoc');
        const ticketPrice = formData.get('ticketPrice');


        festivaService.addFestival({
            festivalName, 
            imgUrlFest,
            summary,
            date,
            location,
            imgUrlLoc,
            ticketPrice,
            ownerId
        })
        .then(festival => {
            navigate('/home');
            console.log(festival)
        })

    }

    return (
        <form method="POST" className="add-festival" onSubmit={onFestivalAdd}>
            <article className="festival-wrapper">
                <h1 className="add-festival-title">Add new festival</h1>
                <i className="fa-solid fa-music"></i>
                    <label htmlFor="fest-title-title">Music Festival:</label>
                    <input type="text" name="festivalName" className="add-fest-title" placeholder="Varna Summer"/>
                    <label htmlFor="fest-img">Music Festival Image:</label>
                    <input type="url" name="imgUrlFest" className="fest-img" placeholder="https://..."/>
                <label htmlFor="summary">Summary:</label>
                <input type="text" name="summary" className="summary" placeholder="Music Festival in Varna!"/>
                <label htmlFor="dates">Date:</label>
                <input type="text" className="dates" name="date" placeholder="01.06.2022-03.06.2022"/>
                <label htmlFor="fest-city">Location:</label>
                <input type="text" className="fest-city" name="location" placeholder="Varna"/>
                <label htmlFor="fest-city-img">Location Image:</label>
                <input type="url" className="fest-city-img" name="imgUrlLoc" placeholder="https://..."/>    
                <label htmlFor="fest-price">Ticket Price:</label>
                <input type="text" className="fest-price" name="ticketPrice" placeholder="25lv"/>
                <div className="btn-add-fest">
                    <button className="fest-btn" type="submit">Add festval</button>
                </div>
            </article>
        </form>
    );
}

export default AddFestival;