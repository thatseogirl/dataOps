import { NavLink } from "react-router-dom";
import { IoIosArrowForward, StyledBasicCluster, Flex } from "../index";

const BasicCluster = () => {
    return (
        <StyledBasicCluster>
            <Flex style={{ flexDirection: "column", gap: "0.5em", marginBottom: "2em" }}>
                <NavLink
                    to='/'
                    style={{
                        paddingLeft: "20px",
                        textDecoration: "none",
                        textTransform: "uppercase",
                        color: "#8A8A8F"
                    }}
                >
                    Home
                    <IoIosArrowForward style={{ marginLeft: "10px" }} />
                </NavLink>
                <hr />
            </Flex>
            <Flex
                style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: " 1em 9em",
                }}
            >
                <h2 style={{ marginBottom: "1em" }}>Confluent Cloud</h2>
                <Flex style={{ flexDirection: "column", gap: "0.5em" }}>
                    <div style={{ display: "flex", gap: "1em" }}>
                        <p>Environments </p>
                        <p style={{ color: "#45C6E8" }}>Cluster links</p>
                    </div>
                    <div style={{ display: "flex" }}>
                        <hr style={{ border: "2px solid #45C6E8", width: "10%" }} />
                        <hr style={{ border: "2px solid #E2E2E8", width: "70%" }} />
                    </div>

                </Flex>
            </Flex>
        </StyledBasicCluster>
    );
};

export default BasicCluster;
