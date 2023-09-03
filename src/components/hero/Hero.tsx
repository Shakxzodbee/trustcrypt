import HeroSection from "./HeroSection";
import { heroImages } from "../../assets/images/pictures";
import { IContent } from '../../types';

const Hero = () => {
    const { homeRight, homeLeft } = heroImages;

    const contents: IContent[] = [
        {
            "title": "Последние события в мире киберпространства",
            "text": "Защитите ваш бизнес от всех видов киберугроз с помощью решений мирового класса.",
            "direction": "normal",
            "src": homeRight
        },
        {
            "title": "Кибербезопасность нового поколения",
            "text": "Масштабируемая защита от самых сложных киберугроз, учитывающая потребности вашего бизнеса.",
            "direction": "reverse",
            "src": homeLeft
        }
    ];

    const heroSections = contents.map((content,index) => (
        <li key={`${content.title}-${index}`}>
            <HeroSection content={content} />
        </li>
    ));

    return (
        <section>
            <ul className='hero'>
                {heroSections}
            </ul>
        </section>
    )
}

export default Hero;