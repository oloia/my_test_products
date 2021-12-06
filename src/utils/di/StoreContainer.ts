import {DiContainer} from "./index";
import {ServiceContainerInterface} from "../../services/types";


class StoreContainer extends DiContainer {
    constructor(protected readonly services: ServiceContainerInterface) {
        super();
    }

    initState = (initialState: unknown): void => {
        if (initialState) {
            // @ts-ignore
            for (const [storeName, storeInitialState] of Object.entries(initialState)) {
                // @ts-ignore
                this[storeName].initState(storeInitialState);
            }
        }
    };
}

export default StoreContainer;

