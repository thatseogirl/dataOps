import {
    Button,
    StandardLogo,
    Tbody,
    Tr,
    Wrapper,
    StyledLogoHeader,
} from "../index";

const Standard = () => {
    return (
        <Wrapper>
            <StyledLogoHeader style={{ marginTop: "3em" }}>
                <img src={StandardLogo} alt='standardLogo' />
                <h4>Standard</h4>
            </StyledLogoHeader>
            <span className='span'>
                For production-ready use cases. Full feature set and standard limits
            </span>
            <div>
                <table>
                    <Tbody>
                        <Tr style={{ gap: "5.5em" }}>
                            <td style={{ fontSize: "15px" }}>Ingress</td>
                            <td
                                data-testid='ingress-BASIC'
                                style={{ fontSize: "14px", color: "#747391" }}
                            >
                                up to 250 MB/s
                            </td>
                        </Tr>
                        <Tr style={{ gap: "5.8em" }}>
                            <td style={{ fontSize: "15px" }}>Egress</td>
                            <td
                                data-testid='egress-BASIC'
                                style={{ fontSize: "14px", color: "#747391" }}
                            >
                                up to 750 MB/s
                            </td>
                        </Tr>
                        <Tr style={{ gap: "5.4em" }}>
                            <td style={{ fontSize: "15px" }}>Storage</td>
                            <td
                                data-testid='storage-BASIC'
                                style={{ fontSize: "14px", color: "#747391" }}
                            >
                                up to 5,000 GB
                            </td>
                        </Tr>
                        <Tr style={{ gap: "1.2em" }}>
                            <td style={{ fontSize: "15px" }}>Client connections</td>
                            <td
                                data-testid='client-connections-BASIC'
                                style={{ fontSize: "14px", color: "#747391" }}
                            >
                                up to 1,000
                            </td>
                        </Tr>
                        <Tr style={{ gap: "4.7em" }}>
                            <td style={{ fontSize: "15px" }}>Partitions</td>
                            <td
                                data-testid='partitions-BASIC'
                                style={{ fontSize: "14px", color: "#747391" }}
                            >
                                up to 4,096 (includes 10 free partitions)
                            </td>
                        </Tr>
                        <Tr style={{ gap: "3.5em" }}>
                            <td style={{ fontSize: "15px" }}>Uptime SLA</td>
                            <td
                                data-testid='sla-BASIC'
                                style={{ fontSize: "14px", color: "#747391" }}
                            >
                                up to 99.5%
                            </td>
                        </Tr>
                    </Tbody>
                </table>
            </div>
            <div style={{ marginTop: "4em" }}>
                <Button text='Begin Configuration' className='standard btn' />
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
                    <p style={{ color: "#747391", fontSize: "28px" }}>$1.50 /hr</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Standard;
