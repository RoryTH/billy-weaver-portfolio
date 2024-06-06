import { Services } from './components/Sections/Services';
import FeaturedWork from './components/Sections/FeaturedWork';
import Intro from './components/Sections/Intro';
import Hero from './components/Sections/Hero';
import HeroBackground from './components/Sections/HeroBackground';

export default function Home() {
    return (
        <>
            <HeroBackground />
            <div className="px-3 md:px-9">
                <Hero />
                <Intro />
                <hr className="h-px my-8 bg-gray-100/10 border-0 " />
                <FeaturedWork />
                <hr className="h-px my-8 bg-gray-100/10 border-0 " />
                <Services />
            </div>
        </>
    );
}
