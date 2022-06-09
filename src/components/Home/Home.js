import HomeCard from './HomeCard';
import Location from './LocationCard';

const Home = () => {

    return (
    <>
    <article className="img-background">
        <img src="https://cdn.pixabay.com/photo/2015/09/05/20/39/acoustic-925174_1280.jpg" alt="pic"/>
    </article>
    <h1 className="popular-fests-title">Latest Summer Music Festivals</h1>
    <section className="popular-fests">
    
    <HomeCard/>
 
    </section>

        <Location />

    </>
    );
}

export default Home;