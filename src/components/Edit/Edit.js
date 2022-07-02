// import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import useFestivalState from "../../hooks/useFestivalState";
import * as festivalService from "../../services/festivalService"
import "./edit.css"


export const Edit = () => {

  const params = useParams();

  const [festival, setFestival] = useFestivalState(params.festivalId);

 
    function onEdit(e) {
        e.preventDefault();

        const festivalData = Object.fromEntries(new FormData(e.currentTarget))

        festivalService.update(params.festivalId, festivalData)

    }


    return (
    <form method="POST" onSubmit={onEdit}>
    <article className="fest-item details">
                <article className="img-fest">
                    <input type="url" defaultValue={festival.imgUrlFest}/>
                </article>
    <input type="text" className="fest-text" defaultValue={festival.name} />
    <input type="text" className="fest-dates" defaultValue = {festival.date} />
    <input type="text" className="catalog-summary" defaultValue={festival.summary}/>
    <input type="text" className="catalog-location" defaultValue={festival.location} />

    <article className="user-btn">
        <button className="cancel">Cancel</button>
        <button className="save" type="submit">Save</button>
    </article>
        </article>
        </form>

    );

} 

export default Edit;