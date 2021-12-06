import { ListProductsServiceInterface} from './listProducts/types';
import {SessionInterface} from "../utils/services/types";

export interface ServiceContainerInterface {
    readonly listProductsService: ListProductsServiceInterface;
    readonly session: SessionInterface;
}
