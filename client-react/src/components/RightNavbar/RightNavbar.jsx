import React from 'react'
import { MdOutlineMenu } from 'react-icons/md';
import styles from './RightNavbar.module.scss';
import { useContext } from "react";
import NavContext from "../../context/NavContext";
import Button from './Submenu/Button'

const RightNavbar = () => 
{
    const {nav , setNav } = useContext(NavContext);
    return (
        <div className= {styles.container}>
            {/*BURGER*/}
            <div className= {styles.burger_container}
            onClick = {() => {
                setNav(!nav)
            }}>
            <MdOutlineMenu/>
            </div>
            
            {/*Actions*/}
            <div className= {styles.actions}>
                
            </div>
            <Button/>
        </div>
    )
}
 
export default RightNavbar;
