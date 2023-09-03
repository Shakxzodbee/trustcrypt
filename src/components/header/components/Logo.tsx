import { ReactComponent as LogoIcon } from '../../../assets/images/icons/logo.svg';
import { NavLink } from 'react-router-dom';

const Logo = () => {
    return (
        <NavLink to='/' className='logo'>
            <LogoIcon className='logoIcon' />
            <p className='logoText'>Trustcrypt</p>
        </NavLink>
    )
}

export default Logo;