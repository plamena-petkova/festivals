import { useEffect, useState } from "react";
import FestivalCard from "./FestivalsCard";
import Parse from 'parse/dist/parse.min.js';


const Festivals = () => {

    const [festivals, setFestivals] = useState([]);


    useEffect(()=> {

        async function fetchData() {
            
            const query = new Parse.Query('festival');
            const Festival = await query.find();

            setFestivals(Festival.map(x => x.attributes))
               
          }
        
        fetchData();

    }, []);
        
    return (
        <section className="catalog">

        {festivals.length > 0
        ? festivals.map(x => <FestivalCard key={x.ticketPrice} festival={x} />)
        : <h1 className="popular-fests-title">No Summer Music Festivals</h1>
        }  

        </section>
        );
}
export default Festivals;