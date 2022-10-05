import { DefaultCluster, DohCluster, BasicCluster } from "../index";

const ConfluentCloud = () => {
    return (
        <div>
            <div>
                <BasicCluster />
                <DefaultCluster />
            </div>
            <DohCluster />
        </div>
    );
};

export default ConfluentCloud;
