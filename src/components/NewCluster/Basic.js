import {
    Button,
    BasicLogo,
    Tbody,
    Tr,
    Wrapper,
    StyledLogoHeader,
} from "../index";
import { useNavigate } from "react-router-dom";

const Basic = () => {
    const navigate = useNavigate();
    const confluentCloud = () => {
        navigate("/confluentCloud");
    };
    return (
        <Wrapper>
            <div style={{ display: " flex", justifyContent: "flex-end" }}>
                <p
                    style={{
                        backgroundColor: "#D7EFF6",
                        color: "#006B96",
                        borderRadius: "5px",
                        padding: "0.5em",
                        fontSize: "14px",
                    }}
                >
                    Recommended
                </p>
            </div>

            <StyledLogoHeader>
                <img src={BasicLogo} alt='basic' />
                <h4>Basic</h4>
            </StyledLogoHeader>
            <span className='span'>
                For learning and exploring Kafka and Confluent Cloud
            </span>
            <div>
                <table>
                    <Tbody>
                        <Tr style={{ gap: "5.5em" }}>
                            <td style={{ fontSize: "15px" }} >Ingress</td>
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="ingress_basic">
                                up to 250 MB/s
                            </td>
                        </Tr>
                        <Tr style={{ gap: "5.8em" }}>
                            <td style={{ fontSize: "15px" }} >Egress</td>
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="egress_basic">
                                up to 750 MB/s
                            </td>
                        </Tr>
                        <Tr style={{ gap: "5.4em" }}>
                            <td style={{ fontSize: "15px" }}>Storage</td>
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="storage_basic">
                                up to 5,000 GB
                            </td>
                        </Tr>
                        <Tr style={{ gap: "1.2em" }}>
                            <td style={{ fontSize: "15px" }}>Client connections</td>
                            <td
                                data-testid='client-connections-basic'
                                style={{ fontSize: "14px", color: "#747391" }}
                            >
                                up to 1,000
                            </td>
                        </Tr>
                        <Tr style={{ gap: "4.7em" }}>
                            <td style={{ fontSize: "15px" }}>Partitions</td>
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="partitions_basic">
                                up to 2,048 (includes 10 free partitions)
                            </td>
                        </Tr>
                        <Tr style={{ gap: "3.5em" }}>
                            <td style={{ fontSize: "15px" }}>Uptime SLA</td>
                            <td style={{ fontSize: "14px", color: "#747391" }} data-testid="sla_basic">
                                up to 99.5%
                            </td>
                        </Tr>
                    </Tbody>
                </table>
            </div>
            <div style={{ marginTop: "3.5em" }}>
                <Button
                    text='Begin Configuration'
                    className='basic btn'
                    onClick={confluentCloud}
                />
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
                    <p style={{ color: "#00AFBA", fontSize: "28px" }}>FREE</p>
                    <p style={{ fontSize: "16px" }}>Upgrade to standard anytime</p>
                </div>
            </div>
        </Wrapper>
    );
};

export default Basic;
