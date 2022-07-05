// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFestivalState from "../../hooks/useFestivalState";
import * as festivalService from "../../services/festivalService"
import styles from "./Edit.module.css";


export const Edit = () => {

    const params = useParams();

    const [festival, setFestival] = useFestivalState(params.festivalId);


    function onEdit(e) {
        e.preventDefault();

        const festivalData = Object.fromEntries(new FormData(e.currentTarget));
        console.log(festivalData)

        festivalService.update(festivalData)
            .then(data => {
                setFestival(data);
            })

    }


    return (
        <form method="POST" onSubmit={onEdit}>
            
            <article className={styles["fest-item"]}>
            <h1 className={styles["edit-fest"]}>Edit Fest Info</h1>
                <article className="img-fest">
                    <input type="url" defaultValue={festival.imgUrlFest} />
                </article>
                <input type="text" className={styles["fest-text"]} defaultValue={festival.festivalName} />
                <input type="text" className={styles["fest-dates"]} defaultValue={festival.date} />
                <input type="text" className={styles["catalog-summary"]} defaultValue={festival.summary} />
                <input type="text" className={styles["catalog-location"]} defaultValue={festival.location} />

                <article className={styles["user-btn"]}>
                    <button className={styles["cancel"]}>Cancel</button>
                    <button className={styles["save"]} type="submit">Save</button>
                </article>
            </article>
        </form>

    );

}

export default Edit;