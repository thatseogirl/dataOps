const userDetails = [
    {
        id: "1",
        username: "ROOT ADMIN",
        organisation: "DataOps House BV",
    },
];
const cluster = [
    {
        id: "1",
        type: "Basic",
        provide: "",
    },
];
const Metrics = [
    {
        id: "1",
        type: "Production",
        usage: "0/Bs",
    },
    {
        id: "2",
        type: "Consumption",
        usage: "0/Bs",
    },
    {
        id: "3",
        type: "Storage",
        usage: "0B",
    },
];
const Resources = [
    {
        id: "1",
        type: "Topics",
        usage: "0",
    },
    {
        id: "2",
        type: "KsqlDB",
        usage: "0",
    },
    {
        id: "3",
        type: "Connectors",
        usage: "0",
    },
    {
        id: "4",
        type: "Clients",
        usage: "0",
    },
];

export { userDetails, cluster, Metrics, Resources };
