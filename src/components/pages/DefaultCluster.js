import React from "react";
import { Link } from "react-router-dom";
import {
    Flex,
    StyledDefaultWrapper,
    StyledBasicCluster,
    GiDiceSixFacesFour,
} from "../index";

const DefaultCluster = ({ handleClick }) => {
    return (
        <StyledBasicCluster style={{ paddingTop: 0, margin: "auto" }}>
            <StyledDefaultWrapper>
                <Flex style={{ flexDirection: "column", gap: "0.5em" }}>
                    <Flex>
                        {" "}
                        <p style={{ color: "black" }}>default</p>
                        <Link
                            style={{ color: "#45C6E8", fontSize: "14px" }}
                            onClick={handleClick}
                        >
                            Edit
                        </Link>
                    </Flex>
                    <hr style={{ border: "2px solid #E2E2E8", width: "50%" }} />
                </Flex>
                <div style={{ display: "flex", gap: "0.25em" }}>
                    <GiDiceSixFacesFour />
                    <p>1 cluster</p>
                </div>
            </StyledDefaultWrapper>
        </StyledBasicCluster>
    );
};

export default DefaultCluster;
