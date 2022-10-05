import React from "react";
import {
    HiOutlineMinus,
    Flex,
    HiOutlineArrowNarrowLeft,
    BsCircle,
    Modal,
} from "../index";

const HatModal = ({ openCluster, closeCluster }) => {
    if (!openCluster) {
        return null;
    }
    return (
        <Flex
            style={{
                position: "absolute",
                top: "130px",
                right: "450px",
                justifyContent: "center",
            }}
        >
            <div>
                <BsCircle style={{ color: "#FF19E6", width: "20px" }} />
                <HiOutlineArrowNarrowLeft size='1em' />
            </div>
            <Modal>
                <HiOutlineMinus
                    onClick={closeCluster}
                    style={{ cursor: "pointer", float: "right" }}
                />
                <div style={{ marginTop: "1.5em" }}>
                    <p style={{ marginBottom: "10px" }}>Create a Kafta cluster</p>
                    <div style={{ display: "flex", gap: "0.25em", marginBottom: "20px" }}>
                        <hr style={{ width: "20%", border: "1px solid #45C6E8" }} />
                        <hr style={{ width: "45%" }} />
                    </div>
                </div>
                <div>
                    <p>
                        Select a cluster type to determine the features, usage, limit and
                        price of your cluster
                    </p>
                </div>
            </Modal>
        </Flex>
    );
};

export default HatModal;
