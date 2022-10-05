import { NavLink } from "react-router-dom";
import { IoIosArrowForward } from "../index";

const BasicCluster = () => {
    return (
        <div>
            <div>
                <NavLink to='/'>
                    Home
                    <IoIosArrowForward />
                </NavLink>
            </div>
            <div>
                <h2>Confluent Cloud</h2>
                <div>
                    <p>Environment</p>
                    <p>Cluster links</p>
                </div>
            </div>
        </div>
    );
};

export default BasicCluster;
