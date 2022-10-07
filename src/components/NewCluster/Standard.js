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
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="ingress_standard">
                                up to 250 MB/s
                            </td>
                        </Tr>
                        <Tr style={{ gap: "5.8em" }}>
                            <td style={{ fontSize: "15px" }}>Egress</td>
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="egress_standard">
                                up to 750 MB/s
                            </td>
                        </Tr>
                        <Tr style={{ gap: "5.4em" }}>
                            <td style={{ fontSize: "15px" }}>Storage</td>
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="storage_standard">unlimited</td>
                        </Tr>
                        <Tr style={{ gap: "1.2em" }}>
                            <td style={{ fontSize: "15px" }}>Client connections</td>
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="client_connections_standard">
                                up to 1,000
                            </td>
                        </Tr>
                        <Tr style={{ gap: "4.7em" }}>
                            <td style={{ fontSize: "15px" }}>Partitions</td>
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="partitions_standard">
                                up to 2,048 (includes 500 free partitions)
                            </td>
                        </Tr>
                        <Tr style={{ gap: "3.5em" }}>
                            <td style={{ fontSize: "15px" }}>Uptime SLA</td>
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="sla_standard">
                                up to 99.99%
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
