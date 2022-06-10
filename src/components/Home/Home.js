import HomeCard from './HomeCard';
// import Location from './LocationCard';
// import * as festivalService from '../../services/festivalService'
import { useEffect, useState } from 'react';
import { collection, getDocs} from 'firebase/firestore'
import { db } from '../../firebase-config';
import LocationCityCard from './LocationCityCard';

const Home = () => {

    const [festivals, setFestivals] = useState([]);

    const festivalsRef = collection(db, 'festivals')

    useEffect(()=> {
        const getAll = async () => {
            const festivals = await getDocs(festivalsRef);
            setFestivals(festivals.docs.map((festival) => ({...festival.data(), id: festival.id})))
        }

        getAll()

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