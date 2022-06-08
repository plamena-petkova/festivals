import HomeCard from './HomeCard';
import Location from './LocationCard';

const Home = () => {

    return (
<main>
    <h1 className="popular-fests-title">Latest Summer Music Festivals</h1>
    <section className="popular-fests">
    
    <HomeCard/>
 
    </section>

        <Location />

    </main>
    );
}

export default Home;