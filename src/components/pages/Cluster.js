import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
    HatModal,
    Basic,
    Standard,
    Dedicated,
    Flex,
    Hat,
    Container,
    Contact,
} from "../index";

const Cluster = () => {
    const [openCluster, setOpenCluster] = useState(false);
    const handleClick = () => {
        setOpenCluster(!openCluster);
    };
    const closeCluster = () => {
        setOpenCluster(false);
    };
    return (
        <>
            <Container>
                <header className='header'>
                    <h3>Create cluster</h3>
                    <section>
                        <p>1. Select cluster type </p>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </section>
                </header>
                <Flex
                    style={{ justifyContent: "center", gap: "1em", marginBottom: "48px" }}
                >
                    <Basic />
                    <Standard />
                    <Dedicated />
                </Flex>
                <Flex style={{ flexDirection: "column", gap: "3em" }}>
                    <NavLink style={{ color: "#1A779E" }}>
                        View all specs <img src={Contact} alt='Contact' />
                    </NavLink>
                    <hr />
                    <NavLink style={{ color: "#1A779E" }}>I'll do it later </NavLink>
                </Flex>
            </Container>
            <HatModal openCluster={openCluster} closeCluster={closeCluster} />
            {!openCluster ? (
                <img src={Hat} alt='hat' onClick={handleClick} className='hat_img' />
            ) : (
                ""
            )}
        </>
    );
};

export default Cluster;
