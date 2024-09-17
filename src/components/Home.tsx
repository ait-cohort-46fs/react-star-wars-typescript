import { withErrorPage } from '../hoc/withErrorPage';
import DreamTeam from './DreamTeam';
import FarGalaxy from './FarGalaxy';
import Hero from './Hero';

const Home = () => {

    return (
        <main>
            <Hero />
            <DreamTeam />
            <FarGalaxy />
        </main> 
    )
}

export default withErrorPage(Home);