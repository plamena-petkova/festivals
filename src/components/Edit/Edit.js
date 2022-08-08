// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFestivalState from "../../hooks/useFestivalState";
// import useFestivalState from "../../hooks/useFestivalState";
import * as festivalService from "../../services/festivalService"
import styles from "./Edit.module.css";


export const Edit = () => {

    const navigate = useNavigate();

    const { festivalId } = useParams();

    const [festival, setFestival] = useFestivalState(festivalId)

    // const [festival, setFestival] = useState({});


    // useEffect(() => {
    //     festivalService.getById(festivalId)
    //         .then(result => setFestival(result))

    // }, [festivalId]);


    const onEdit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const festivalName = formData.get('festivalName');
        const imgUrlFest = formData.get('imgUrlFest');
        const summary = formData.get('summary');
        const date = formData.get('date');
        const location = formData.get('location');
        const imgUrlLoc = formData.get('imgUrlLoc');
        const ticketPrice = Number(formData.get('ticketPrice'));

        const festivalData = { festivalName, imgUrlFest, summary, date, location, imgUrlLoc, ticketPrice }

        // let festivalData = Object.fromEntries(new FormData(e.currentTarget))


        festivalService.update(festivalId, festivalData)
            .then(data => {
                setFestival(data);
                navigate(`/festivals/${festivalId}`);
            })

    }


    return (
        <form method="POST" className={styles["edit-festival"]} onSubmit={onEdit}>
            <article className={styles["festival-wrapper"]}>
                <h1 className={styles["edit-festival-title"]}>Edit {festival.festivalName}</h1>
                <i className="fa-solid fa-music"></i>
                <label htmlFor="fest-title-title">Music Festival:</label>
                <input type="text" name="festivalName" className={styles["add-fest-title"]} placeholder="Varna Summer" defaultValue={festival.festivalName} />
                <label htmlFor="fest-img">Music Festival Image:</label>
                <input type="url" name="imgUrlFest" className={styles["fest-img"]} placeholder="https://..." defaultValue={festival.imgUrlFest} />
                <label htmlFor="summary">Summary:</label>
                <input type="text" name="summary" className={styles["summary"]} placeholder="Music Festival in Varna!" defaultValue={festival.summary} />
                <label htmlFor="dates">Date:</label>
                <input type="text" className={styles["dates"]} name="date" placeholder="01.06.2022-03.06.2022" defaultValue={festival.date} />
                <label htmlFor="fest-city">Location:</label>
                <input type="text" className={styles["fest-city"]} name="location" placeholder="Varna" defaultValue={festival.location} />
                <label htmlFor="fest-city-img">Location Image:</label>
                <input type="url" className={styles["fest-city-img"]} name="imgUrlLoc" placeholder="https://..." defaultValue={festival.imgUrlLoc} />
                <label htmlFor="fest-price">Ticket Price:</label>
                <input type="text" className={styles["fest-price"]} name="ticketPrice" placeholder="25lv" defaultValue={festival.ticketPrice} />
                <article className={styles["user-btn"]}>
                    <button className={styles["cancel"]}>Cancel</button>
                    <button className={styles["save"]} type="submit">Save</button>
                </article>
                </article>
            
        </form>

    );

}

export default Edit;