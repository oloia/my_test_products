import ProductsStoreContainer from "./ProductsStoreContainer";
import ServiceContainer from '../services/ServiceContainer';

const productsStores = new ProductsStoreContainer(new ServiceContainer);

export default productsStores;
