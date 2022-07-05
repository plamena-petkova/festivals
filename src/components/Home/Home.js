import HomeCard from './HomeCard';
import * as festivalService from '../../services/festivalService'
import { useEffect, useState } from 'react';
import LocationCityCard from './LocationCityCard';
import styles from "./Home.module.css";



const Home = () => {
    
    const [festivals, setFestivals] = useState([]);


    useEffect(()=> {
        
        festivalService.getLatest()
                       .then(result => setFestivals(result))
        
    },
    []);
  
    // console.log(festivals)

    return (
    <>
    <article className={styles["img-background"]}>
        <img src="https://cdn.pixabay.com/photo/2015/09/05/20/39/acoustic-925174_1280.jpg" alt="pic"/>
    </article>
    <h1 className={styles["popular-fests-title"]}>Latest Summer Music Festivals</h1>
    <section className={styles["popular-fests"]}>

    {festivals.length > 0 
        ? festivals.map(x => <HomeCard key={x.id} festival={x} />)
        : <h1 className={styles["popular-fests-title"]}>No Summer Music Festivals</h1>
    }
 

 
    </section>

        <h1 className={styles["fest-city-title"]}>Festival Location</h1>
        <section className={styles["fest-city"]}>
        {festivals.length > 0
        ? festivals.map(x => <LocationCityCard key={x.id} festival={x} />)
        : <h1 className={styles["popular-fests-title"]}>No Summer Music Festivals</h1>
        }   
        {/* <LocationCityCard/> */}
        </section>


    {/* <Location festival={festivals.map(x => key={x.id} festival={x})}/> */}

    </>
    );
}

export default Home;