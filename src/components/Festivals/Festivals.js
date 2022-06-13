import { useEffect, useState } from "react";
import FestivalCard from "./FestivalsCard";
import * as festivalService from '../../services/festivalService'


const Festivals = () => {

    const [festivals, setFestivals] = useState([]);


    useEffect(()=> {

        festivalService.getAll()
        .then(result => setFestivals(result))

    }, []);
        
    return (
        <section className="catalog">

        {festivals.length > 0
        ? festivals.map(x => <FestivalCard key={x.id} festival={x} />)
        : <h1 className="popular-fests-title">No Summer Music Festivals</h1>
        }  

        </section>
        );
}
export default Festivals;