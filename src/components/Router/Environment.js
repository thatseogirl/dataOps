import { Flex, DefaultCluster, Button, BasicCluster } from "../index";

const Environment = () => {
    return (
        <Flex>
            <div>
                <BasicCluster />
            </div>
            <div>
                <h3>There is no data in your environment yet</h3>
                <p>
                    Start generating data and developing your first pipeline with one of
                    the suggested methods
                </p>
                <Flex>
                    <Button text='Add a connector' />
                    <Button text='Configure a client' />
                </Flex>
            </div>
            <DefaultCluster />
        </Flex>
    );
};

export default Environment;
