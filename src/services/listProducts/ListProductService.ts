import { HttpClientInterface } from '../http/types';
import { ListProductsServiceInterface, ProductDetail } from './types';
import { PRODUCT_LIST_ENDPOINT } from '../../config/products/endpoints';


class ListProductsService implements ListProductsServiceInterface {
    constructor(private readonly client: HttpClientInterface) {}

    async getProductDetail(): Promise<ProductDetail[]> {
        const { data } = await this.client.get<ProductDetail[]>(PRODUCT_LIST_ENDPOINT);
        // @ts-ignore
        return data.data;
    }
}

export default ListProductsService;
