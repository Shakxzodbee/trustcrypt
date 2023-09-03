import Hero from '../components/hero/Hero';
import Instruments from '../components/Instruments';
import Security from '../components/Security';
import Container from '../components/Container';

const HomePage = () => {
    return (
        <div className="home">
            <Container>
                <Hero />
                <Instruments />
                <Security />
            </Container>
        </div>
    )
}

export default HomePage;