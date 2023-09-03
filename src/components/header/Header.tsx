import Container from "../Container";
import Logo from "./components/Logo";
import Navigation from './components/navigation/Navigation';

const Header = () => {
    return (
        <header className="header">
            <Container>
                <div className='headerContainer'>
                    <Logo />
                    <Navigation/>
                </div>
            </Container>
        </header>
    )
}

export default Header;