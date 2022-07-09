import SelectOption from "./SelectOption";
import styles from "./AddFestival.module.css"

const SelectForm = (props) => {

    const location = props.location;
    console.log(location);


    return (

        <form action="POST">
            <label htmlFor="fest-city">Location:</label>
            <select name="location" id="location">
                {location.map(x => <SelectOption x={x.lenght} location={x} />)}
            </select>
            <input type="text" className={styles["fest-city"]} name="location" placeholder="Varna" />
         </form>

    )
}

export default SelectForm;