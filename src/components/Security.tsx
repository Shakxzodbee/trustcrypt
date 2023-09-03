import { ReactComponent as Anon } from '../assets/images/icons/anon.svg';
import { ReactComponent as Protect } from '../assets/images/icons/protect.svg';
import { ReactComponent as Check } from '../assets/images/icons/check.svg';
import Section from './Section';

const Security = () => {

    const securityDetails = [
        {
            "icon": Anon,
            "text": "Анонимность"
        },
        {
            "icon": Check,
            "text": "Проверка на наличие угроз",
        },
        {
            "icon": Protect,
            "text": "Обнаружение и предотвращение аттак"
        }
    ];

    const securityCharacteristics = securityDetails.map(({ icon, text }, index) => {
        const Svg = icon;
        return (
            <li className='securityItem' key={`security-${index}`}>
                <div className='securityIconWrap'>
                    <Svg className='securityIcon' />
                </div>
                <p className='securityCapture'>{text}</p>
            </li>
        )
    });

    return (
        <Section>
            <h2 className='securityTitle'>Наши продукты направлены на вашу безопасность. </h2>
            <p className='securityText'>Мы придерживаемся в своей работе простого принципа: детектировать и блокировать любую вредоносную атаку.</p>
            <ul className='securityList'>
                {securityCharacteristics}
            </ul>
        </Section>
    )
}

export default Security;