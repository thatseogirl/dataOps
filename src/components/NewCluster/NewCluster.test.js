import { render, screen, } from "@testing-library/react";
import Basic from "./Basic";
import Standard from "./Standard";
import Dedicated from "./Dedicated";

test("basic customer usage", () => {
    render(<Basic />);
    const ingress = screen.getByTestId("ingress_basic");
    const egress = screen.getByTestId("egress_basic");
    const storage = screen.getByTestId("storage_basic")
    const sla = screen.getByTestId("sla_basic")
    const partitions = screen.getByTestId("partitions_basic");
    const clientConnections = screen.getByTestId("client_connections_basic");


    expect(ingress).toHaveTextContent("up to 250 MB/s");
    expect(egress).toHaveTextContent("up to 750 MB/s");
    expect(storage).toHaveTextContent("up to 5,000");
    expect(sla).toHaveTextContent("up to 99.5%");
    expect(partitions).toHaveTextContent("up to 2,048 (includes 10 free partitions)");
    expect(clientConnections).toHaveTextContent("up to 1,000");

});

test("standard customer usage", () => {
    render(<Standard />);
    const ingress = screen.getByTestId("ingress_standard");
    const egress = screen.getByTestId("egress_standard");
    const storage = screen.getByTestId("storage_standard")
    const sla = screen.getByTestId("sla_standard")
    const partitions = screen.getByTestId("partitions_standard");
    const clientConnections = screen.getByTestId("client_connections_standard");


    expect(ingress).toHaveTextContent("up to 250 MB/s");
    expect(egress).toHaveTextContent("up to 750 MB/s");
    expect(storage).toHaveTextContent("unlimited");
    expect(sla).toHaveTextContent("up to 99.99%");
    expect(partitions).toHaveTextContent("up to 2,048 (includes 500 free partitions)");
    expect(clientConnections).toHaveTextContent("up to 1,000");


});

test("dedicated customer usage", () => {
    render(<Dedicated />);
    const ingress = screen.getByTestId("ingress_dedicated");
    const egress = screen.getByTestId("egress_dedicated");
    const storage = screen.getByTestId("storage_dedicated")
    const sla = screen.getByTestId("sla_dedicated")
    const partitions = screen.getByTestId("partitions_dedicated");
    const clientConnections = screen.getByTestId("client_connections_dedicated");

    expect(ingress).toHaveTextContent("up to 50 MB/s");
    expect(egress).toHaveTextContent("up to 150 MB/s");
    expect(storage).toHaveTextContent("unlimited");
    expect(sla).toHaveTextContent("up to 99.99%");
    expect(partitions).toHaveTextContent("up to 4,500");
    expect(clientConnections).toHaveTextContent("up to 9,000");

});
