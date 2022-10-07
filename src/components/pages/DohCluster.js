/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Metrics, Resources } from "../Content";
import {
    StyledDoh,
    Flex,
    HiOutlineDotsHorizontal,
    IoIosCheckmarkCircleOutline,
    Tree,
} from "../index";
const DohCluster = ({ openDoh, onClose, getData }) => {
    const [metrics, setMetrics] = useState(Metrics);
    const [resource, setResource] = useState(Resources);
    if (!openDoh) {
        return null;
    }

    return (
        <StyledDoh>
            <Flex style={{ flexDirection: "column", padding: "2em", gap: "2em" }}>
                <Flex
                    style={{
                        backgroundColor: "#e0ffff",
                        padding: "1em",
                        borderRadius: "5px",
                    }}
                >
                    <Flex style={{ gap: "0.75em" }}>
                        <div>
                            <img
                                src={Tree}
                                alt='clusterTree'
                                style={{ width: "50px", height: "50px" }}
                            />
                        </div>
                        <div>
                            <p style={{ fontWeight: "600", fontSize: "20px" }}>doh-cluster</p>
                            <p>
                                <IoIosCheckmarkCircleOutline
                                    style={{ color: "#45C6E8", marginTop: "5px" }}
                                />
                                Running
                            </p>
                        </div>
                    </Flex>
                    <div>
                        <HiOutlineDotsHorizontal
                            onClick={onClose}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                </Flex>
                <div>
                    <p
                        style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            marginBottom: "0.75em",
                        }}
                    >
                        Metrics
                    </p>
                    <div style={{ display: "flex", gap: "2em" }}>
                        {metrics.map((data) => (
                            <div key={data.id}>
                                <section style={{ display: "flex", gap: "1.5em" }}>
                                    <Flex style={{ flexDirection: "column", gap: "0.5em" }}>
                                        <p>{data.type}</p>
                                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
                                            {data.usage}
                                        </p>
                                    </Flex>
                                    <hr />
                                </section>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p
                        style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            marginBottom: "0.75em",
                        }}
                    >
                        Resources
                    </p>
                    <div style={{ display: "flex", gap: "2em" }}>
                        {resource.map((data) => (
                            <div key={data.id}>
                                <section style={{ display: "flex", gap: "1em" }}>
                                    <Flex style={{ flexDirection: "column", gap: "0.5em" }}>
                                        <p style={{ color: "#45C6E8" }}>{data.type}</p>
                                        <p style={{ fontWeight: "600", fontSize: "20px" }}>
                                            {data.usage}
                                        </p>
                                    </Flex>
                                    <hr />
                                </section>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <p
                        style={{
                            fontWeight: "600",
                            fontSize: "16px",
                            marginBottom: "0.75em",
                        }}
                    >
                        Overview
                    </p>

                    <div style={{ display: "flex", gap: "1.5em" }}>
                        <div>
                            <p>ID</p>
                            <p>Type</p>
                            <p>Provide & region</p>
                        </div>
                        {getData.map((data) => (
                            <div key={data.id}>
                                <p>{data.id}</p>
                                <p>{data.type}</p>
                                <p>{data.providerRegion}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Flex>
        </StyledDoh>
    );
};

export default DohCluster;
