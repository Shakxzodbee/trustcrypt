import { useState } from "react";
import { Drawer } from "antd";
import NavigationGroup from "./header/components/navigation/NavigationGroup";
import { ReactComponent as CloseMenuIcon } from '../assets/images/icons/close-btn.svg';
import { ReactComponent as OpenMenuIcon } from '../assets/images/icons/menu-btn.svg';

const MobileMenu = () => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const showHideDrawer = () => {
        setMenuIsOpen(!menuIsOpen);
    };

    const onClose = () => {
        setMenuIsOpen(false);
    };
    
    const menuIcon = menuIsOpen ? <CloseMenuIcon /> : <OpenMenuIcon />;
    
    return (
        <div className="mobileMenu">
            <button className="mobileMenuBtn" onClick={showHideDrawer}>
                {menuIcon}
            </button>
            <Drawer
                placement="top"
                closable={false}
                onClose={onClose}
                onClick={onClose}
                open={menuIsOpen}
                rootClassName="mobile-menu"
            >
                <NavigationGroup/> 
            </Drawer>
        </div>
    )
}

export default MobileMenu;