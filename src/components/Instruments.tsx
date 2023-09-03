import { NavLink } from 'react-router-dom';
import { ReactComponent as Metalsploit } from '../assets/images/icons/metasploit.svg';
import Section from './Section';

const instruments = [Metalsploit, Metalsploit, Metalsploit, Metalsploit];

const Instruments = () => {

    const instrumentsItems = instruments.map((instrument, index) => {
        const InstrumentSvg = instrument;
        return (
            <li key={`${instrument}-${index}`} className='instrumentsItem'>
                <NavLink to='products'>
                    <InstrumentSvg className="instrumentsIcon" />
                </NavLink>
            </li>
        )
    });

    return (
        <Section>
            <h2 className='instrumentsTitle'> Инструменты</h2>
            <p className='instrumentsText'>Тестирование на проникновение позволяет ответить на вопрос, как кто-то со злым умыслом может вмешаться в вашу сеть.</p>
            <ul className='instrumentsList'>
                {instrumentsItems}
            </ul>
        </Section>
    )
}

export default Instruments;