import { StyledDoh, Flex, HiOutlineDotsHorizontal } from "../index"
const DohCluster = () => {
    return <StyledDoh>
        <Flex style={{ flexDirection: "column", padding: "2em" }}>
            <div>
                <div>
                    <></>
                    <></>
                </div>
                <div>
                    <HiOutlineDotsHorizontal />
                </div>
            </div>
            <div>
                <p>Metrics</p>
                <section></section>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </Flex>
    </StyledDoh>;
};

export default DohCluster;
