import Media from "react-media"
import MobileMenu from "../../../MobileMenu"
import NavigationGroup from "./NavigationGroup"

const Navigation = () => {
    return (
        <div>
            <Media queries={{
                small: "(max-width: 767px)",
                large: "(min-width: 768px)"
            }}>
                {matches => (
                    <>
                        {matches.small && <MobileMenu/>}
                        {matches.large && <NavigationGroup/>}
                    </>
            )}
            </Media>
        </div>
    )
}

export default Navigation;