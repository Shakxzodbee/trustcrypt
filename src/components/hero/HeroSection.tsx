import { NavLink } from 'react-router-dom';
import { IContent } from '../../types';
import { Skeleton } from 'antd';

interface HeroSectionProps {
    content: IContent;
}

const HeroSection = ({ content }: HeroSectionProps) => {
    const { direction, title, text, src } = content;

    const image = !!src ?
        <img className='heroImg' src={src} alt="Cybersecurity" /> :
        <Skeleton.Image active={!src} />;

    return (
        <div className={`heroSection ${direction}`}>
            <div className='heroDescription'>
                <h1 className="heroTitle">{title}</h1>
                <p className='heroText'>{text}</p>
                <NavLink to="products">
                    <button className='heroButton'>Подробнее</button>
                </NavLink>
            </div>
            <div className='heroImgWrap'>
                {image}
            </div>
        </div>
    )
}

export default HeroSection;