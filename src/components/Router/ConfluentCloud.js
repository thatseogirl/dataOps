import { useState } from "react";
import { DefaultCluster, DohCluster, BasicCluster, Flex } from "../index";

const ConfluentCloud = () => {
    const [openDoh, setOpenDoh] = useState(false);
    const handleClick = () => {
        setOpenDoh(!openDoh);
    };
    const closeDoh = () => {
        setOpenDoh(false);
    };
    return (
        <div>
            <Flex style={{ flexDirection: "column", gap: "15em" }}>
                <BasicCluster />
                <DefaultCluster handleClick={handleClick} />
            </Flex>
            <DohCluster openDoh={openDoh} onClose={closeDoh} />
        </div>
    );
};

export default ConfluentCloud;
