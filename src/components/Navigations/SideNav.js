import React from 'react'
import { SideNavContainer } from "../index"

const SideNav = ({ openSideNav, onClose }) => {
    if (!openSideNav) {
        return null;
    }
    return (
        <SideNavContainer>sideNav
            <button onClick={onClose}>x</button>
        </SideNavContainer>
    )
}

export default SideNav 
