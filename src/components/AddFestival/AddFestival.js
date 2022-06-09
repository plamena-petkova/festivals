

const AddFestival = () => {
    return (
        <form method="POST" className="add-festival">
            <article className="festival-wrapper">
                <h1 className="add-festival-title">Add new festival</h1>
                <i className="fa-solid fa-music"></i>
                    <label for="fest-title-title">Music Festival:</label>
                    <input type="text" className="add-fest-title" placeholder="Varna Summer"/>
                    <label for="fest-img">Music Festival Image:</label>
                    <input type="url" className="fest-img" placeholder="https://..."/>
                <label for="summary">Summary:</label>
                <input type="text" className="summary" placeholder="Music Festival in Varna!"/>
                <label for="dates">Date:</label>
                <input type="text" className="dates" placeholder="01.06.2022-03.06.2022"/>
                <label for="fest-city">Location:</label>
                <input type="text" className="fest-city" placeholder="Varna"/>
                <label for="fest-city-img">Location Image:</label>
                <input type="url" className="fest-city-img" placeholder="https://..."/>    
                <label for="fest-price">Ticket Price:</label>
                <input type="text" className="fest-price" placeholder="25lv"/>
                <div className="btn-add-fest">
                    <button className="fest-btn" type="submit">Add festval</button>
                </div>
            </article>
        </form>
    );
}

export default AddFestival;