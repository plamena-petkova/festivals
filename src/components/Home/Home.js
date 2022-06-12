import HomeCard from './HomeCard';
// import * as festivalService from '../../services/festivalService'
import { useEffect, useState } from 'react';
import LocationCityCard from './LocationCityCard';

const Home = () => {

    const [festivals, setFestivals] = useState([]);


    useEffect(()=> {

    }, []);

 
    return (
    <>
    <article className="img-background">
        <img src="https://cdn.pixabay.com/photo/2015/09/05/20/39/acoustic-925174_1280.jpg" alt="pic"/>
    </article>
    <h1 className="popular-fests-title">Latest Summer Music Festivals</h1>
    <section className="popular-fests">

    {festivals.length > 0
        ? festivals.map(x => <HomeCard key={x.id} festival={x} />)
        : <h1 className="popular-fests-title">No Summer Music Festivals</h1>
    }
    

 
    </section>

        <h1 className="fest-city-title">Festival Location</h1>
        <section className="fest-city">
        {festivals.length > 0
        ? festivals.map(x => <LocationCityCard key={x.id} festival={x} />)
        : <h1 className="popular-fests-title">No Summer Music Festivals</h1>
    }
        {/* <LocationCityCard/> */}
        </section>


    {/* <Location festival={festivals.map(x => key={x.id} festival={x})}/> */}

    </>
    );
}

export default Home;