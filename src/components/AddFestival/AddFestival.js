

const AddFestival = () => {
    return (
        <form method="POST" className="add-festival">
            <article className="festival-wrapper">
                <h1 className="add-festival-title">Add new festival</h1>
                <i className="fa-solid fa-music"></i>
                    <label htmlFor="fest-title-title">Music Festival:</label>
                    <input type="text" className="add-fest-title" placeholder="Varna Summer"/>
                    <label htmlFor="fest-img">Music Festival Image:</label>
                    <input type="url" className="fest-img" placeholder="https://..."/>
                <label htmlFor="summary">Summary:</label>
                <input type="text" className="summary" placeholder="Music Festival in Varna!"/>
                <label htmlFor="dates">Date:</label>
                <input type="text" className="dates" placeholder="01.06.2022-03.06.2022"/>
                <label htmlFor="fest-city">Location:</label>
                <input type="text" className="fest-city" placeholder="Varna"/>
                <label htmlFor="fest-city-img">Location Image:</label>
                <input type="url" className="fest-city-img" placeholder="https://..."/>    
                <label htmlFor="fest-price">Ticket Price:</label>
                <input type="text" className="fest-price" placeholder="25lv"/>
                <div className="btn-add-fest">
                    <button className="fest-btn" type="submit">Add festval</button>
                </div>
            </article>
        </form>
    );
}

export default AddFestival;