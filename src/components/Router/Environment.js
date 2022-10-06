import {
    Flex,
    DefaultCluster,
    Button,
    BasicCluster,
    AiOutlineWarning,
} from "../index";

const Environment = () => {
    return (
        <Flex style={{ flexDirection: "column", gap: "3.5em" }}>
            <div>
                <BasicCluster />
            </div>
            <div
                style={{
                    width: "50%",
                    marginLeft: "9em",
                    padding: "1em 2em",
                    backgroundColor: "#e0ffff",
                    borderRadius: "5px",
                }}
            >
                <div style={{ display: "flex", gap: "1em" }}>
                    <AiOutlineWarning size='2.5em' style={{ marginTop: "20px" }} />
                    <Flex style={{ flexDirection: "column", gap: "1.5em" }}>
                        <Flex style={{ flexDirection: "column", gap: "0.5em" }}>
                            <h3>There is no data in your environment yet</h3>
                            <p>
                                Start generating data and developing your first pipeline with
                                one of the suggested methods
                            </p>
                        </Flex>

                        <div style={{ display: "flex", gap: "1em" }}>
                            <Button text='Add a connector' className='env_btn' />
                            <Button text='Configure a client' className='env_btn' />
                        </div>
                    </Flex>
                </div>
            </div>
            <DefaultCluster />
        </Flex>
    );
};

export default Environment;
