import {
    Button,
    DedicatedLogo,
    Tbody,
    Tr,
    Wrapper,
    StyledLogoHeader,
} from "../index";

const Dedicated = () => {
    return (
        <Wrapper>
            <StyledLogoHeader style={{ marginTop: "3em" }}>
                <img src={DedicatedLogo} alt='basic' />
                <h4>Dedicated</h4>
            </StyledLogoHeader>
            <span className='span'>
                For use case with high traffic or that require private networking
            </span>
            <div>
                <p>Price as sized: 1 CKU</p>
                <div className='range'>
                    <input
                        type='range'
                        min='1'
                        max='100'
                        className='slider'
                        id='myRange'
                    />
                </div>
            </div>
            <div>
                <table>
                    <Tbody>
                        <Tr style={{ gap: "5.5em" }}>
                            <td style={{ fontSize: "15px" }}>Ingress</td>
                            <td style={{ fontSize: "14px", color: "#747391" }}>
                                up to 50 MB/s
                            </td>
                        </Tr>
                        <Tr style={{ gap: "5.8em" }}>
                            <td style={{ fontSize: "15px" }}>Egress</td>
                            <td style={{ fontSize: "14px", color: "#747391" }}>
                                up to 150 MB/s
                            </td>
                        </Tr>
                        <Tr style={{ gap: "5.4em" }}>
                            <td style={{ fontSize: "15px" }}>Storage</td>
                            <td style={{ fontSize: "14px", color: "#747391" }}>unlimited</td>
                        </Tr>
                        <Tr style={{ gap: "1.2em" }}>
                            <td style={{ fontSize: "15px" }}>Client connections</td>
                            <td style={{ fontSize: "14px", color: "#747391" }}>
                                up to 9,000
                            </td>
                        </Tr>
                        <Tr style={{ gap: "4.7em" }}>
                            <td style={{ fontSize: "15px" }}>Partitions</td>
                            <td style={{ fontSize: "14px", color: "#747391" }}>
                                up to 4,500
                            </td>
                        </Tr>
                        <Tr style={{ gap: "3.5em" }}>
                            <td style={{ fontSize: "15px" }}>Uptime SLA</td>
                            <td style={{ fontSize: "14px", color: "#747391" }}>
                                up to 99.99%
                            </td>
                        </Tr>
                    </Tbody>
                </table>
            </div>
            <div style={{ marginTop: "1em" }}>
                <Button text='Begin Configuration' className='dedicated btn' />
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "0.5em",
                    }}
                >
                    <p style={{ fontSize: "16px" }}>Starting at</p>
                    <p style={{ color: "#747391", fontSize: "28px" }}>$2.66 /hr</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Dedicated;
