import StoreContainer from "../utils/di/StoreContainer";
import ListProductStore from "./listProducts/ListProductsStore";

class ProductsStoreContainer extends StoreContainer {

    get listProductStore(): ListProductStore {
        const { listProductsService } = this.services;

        return this.getInstance('listOfProducts', () => new ListProductStore(listProductsService),
        );
    }
}

export default ProductsStoreContainer;
