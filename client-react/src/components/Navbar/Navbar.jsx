//STYLES
import styles from './Navbar.module.scss';
import React, { useState } from 'react';
//CONTEXT
import { useContext } from 'react';
import NavContext from '../../context/NavContext';

//REACT ROUTER
import { NavLink } from 'react-router-dom';

//ICONS
import {
    MdOutlineDashboard,
    MdOutlineAnalytics,
    MdOutlinedFlag,
    MdPeopleOutline,
    MdOutlineMessage,
    MdOutlineLogout,
} from 'react-icons/md';
import { FaTimes } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { VscDashboard } from 'react-icons/vsc';

const NavUrl = ({ url, icon, description }) => {
    const { nav, setNav } = useContext(NavContext);
    const checkWindowSize = () => {
        if (window.innerWidth < 1024) setNav(!nav);
    };

    const [isActive, setisActive] = useState(false);

    return (
        <li className={styles.li_navlink}>
            <NavLink
                to={`${url}`}
                onMouseEnter={() => {
                    setisActive(true);
                }}
                onMouseLeave={() => {
                    setisActive(false);
                }}
                className={isActive ? styles.active : undefined}
                onClick={() => checkWindowSize()}>
                {icon}
                <span className={styles.description}>{description}</span>
            </NavLink>
        </li>
    );
};

const Navbar = () => {
    const { nav, setNav } = useContext(NavContext);

    return (
        <div
            className={`${styles.navbar_container} ${
                nav ? styles.navbar_mobile_active : undefined
            }`}>
            <nav className={nav ? undefined : styles.nav_small}>
                {/* LOGO */}
                <div className={styles.logo}>
                    <VscDashboard className={styles.logo_icon} />
                    <FaTimes
                        className={styles.mobile_cancel_icon}
                        onClick={() => {
                            setNav(!nav);
                        }}
                    />
                </div>

                {/* MENU */}
                <ul className={styles.menu_container}>
                    {/* FIRST CATEGORY */}
                    <span className={styles.categories}>
                        {nav ? 'Pages' : <BsThreeDots />}
                    </span>

                    <NavUrl
                        url='/'
                        icon={<MdOutlineDashboard />}
                        description='Dashboard'
                    />
                    <NavUrl
                        url='usage'
                        icon={<MdOutlineAnalytics />}
                        description='Usage'
                    />
                    <NavUrl
                        url='plan'
                        icon={<MdOutlinedFlag />}
                        description='Plan'
                    />
                    <NavUrl
                        url='documentation'
                        icon={<MdPeopleOutline />}
                        description='Documentation'
                    />

                    <NavUrl
                        url='invoices'
                        icon={<MdOutlineMessage />}
                        description='Invoices'
                    />
                </ul>

                {/* LOGOUT BUTTON */}
                <div
                    className={`${styles.btn_logout}`}
                    onClick={() => {
                        setNav(!nav);
                    }}>
                    <MdOutlineLogout />
                </div>
            </nav>

            <div
                className={
                    nav ? styles.mobile_nav_background_active : undefined
                }
                onClick={() => {
                    setNav(!nav);
                }}></div>
        </div>
    );
};

export default Navbar;
