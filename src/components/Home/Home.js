import HomeCard from './HomeCard';
// import * as festivalService from '../../services/festivalService'
import { useEffect, useState } from 'react';
import LocationCityCard from './LocationCityCard';
import Parse from 'parse/dist/parse.min.js';

const PARSE_APPLICATION_ID = 'N7Xz8vuxjzsKbiffxZeYoXrjo7nBno2e3pksZnai';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = 'sdl95ibeRAy6no9YdpAbfOcm8Cp9Z96mJ2t8cEiM';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;


const Home = () => {
    
    const [festivals, setFestivals] = useState([]);


    useEffect(()=> {

        async function fetchData() {
            // create your Parse Query using the Person Class you've created
            const query = new Parse.Query('festival');
            // use the equalTo filter to look for user which the name is John. this filter can be used in any data type
            // query.equalTo('festivalName', 'John');
            // run the query
            const Festival = await query.find();
            // access the Parse Object attributes

            setFestivals(Festival.map(x => x.attributes))
               
          }
        // festivalService.getAll()
        // .then(result => setFestivals(result))

        fetchData();
        
    },
    []);

    
  

    return (
    <>
    <article className="img-background">
        <img src="https://cdn.pixabay.com/photo/2015/09/05/20/39/acoustic-925174_1280.jpg" alt="pic"/>
    </article>
    <h1 className="popular-fests-title">Latest Summer Music Festivals</h1>
    <section className="popular-fests">

    {festivals.length > 0
        ? festivals.map(x => <HomeCard key={x.ticketPrice} festival={x} />)
        : <h1 className="popular-fests-title">No Summer Music Festivals</h1>
    }
 

 
    </section>

        <h1 className="fest-city-title">Festival Location</h1>
        <section className="fest-city">
        {festivals.length > 0
        ? festivals.map(x => <LocationCityCard key={x.ticketPrice} festival={x} />)
        : <h1 className="popular-fests-title">No Summer Music Festivals</h1>
        }   
        {/* <LocationCityCard/> */}
        </section>


    {/* <Location festival={festivals.map(x => key={x.id} festival={x})}/> */}

    </>
    );
}

export default Home;