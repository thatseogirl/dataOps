import { DefaultCluster, DohCluster, BasicCluster, Flex } from "../index";

const ConfluentCloud = () => {
    return (
        <div>
            <Flex style={{ flexDirection: "column", gap: "15em" }}>
                <BasicCluster />
                <DefaultCluster />
            </Flex>
            <DohCluster />
        </div>
    );
};

export default ConfluentCloud;
