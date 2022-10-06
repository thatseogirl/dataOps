import { Flex, DefaultCluster, Button, BasicCluster } from "../index";

const Environment = () => {
    return (
        <Flex style={{ flexDirection: "column" }}>
            <div>
                <BasicCluster />
            </div>
            <div>
                <h3>There is no data in your environment yet</h3>
                <p>
                    Start generating data and developing your first pipeline with one of
                    the suggested methods
                </p>
                <div style={{ display: "flex" }}>
                    <Button text='Add a connector' />
                    <Button text='Configure a client' />
                </div>
            </div>
            <DefaultCluster />
        </Flex>
    );
};

export default Environment;
