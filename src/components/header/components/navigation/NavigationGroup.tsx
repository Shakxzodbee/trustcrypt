import NavToPages from "./NavToPages"
import SocialList from "./SocialList";

const NavigationGroup = () => {
    return (
        <nav className="navigationGroup">
            <NavToPages />
            <SocialList/>
        </nav>
    )
}

export default NavigationGroup;