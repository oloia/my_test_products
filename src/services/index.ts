import {ServiceContainerInterface} from "./types";
import ServiceContainer from "./ServiceContainer";


const createServiceContainer = (): ServiceContainerInterface => {

    return new ServiceContainer();
};

export default createServiceContainer();
