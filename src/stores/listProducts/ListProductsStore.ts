import { action, observable } from 'mobx';
import {ListProductsServiceInterface, ProductDetail} from "../../services/listProducts/types";

interface Data {
    productDetail: ProductDetail[];
    cart: ProductDetail[];
}

const initialData = {
    productDetail: [],
    cart: [],
};

class ListProductStore {
    data = observable<Data>({ ...initialData });

    constructor(
        private readonly listProductsService: ListProductsServiceInterface
    ) {}

    get cart(): ProductDetail[] {
        return this.data.cart;
    }

    get productDetail(): ProductDetail[] {
        return this.data.productDetail;
    }

    get totalPrice(): number {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }

    addToCart = action((product: ProductDetail) => {
        this.data.cart = [...this.data.cart, product];
        console.log([...this.data.cart].map((item) => ({...item})))
    });

    removeFromCart = action((product: ProductDetail) => {
        this.data.cart = this.data.cart.filter((p) => p.id !== product.id);
        console.log([...this.data.cart].map((item) => ({...item})))
    });

    loadProductDetails = action(async () => {
        try {
            this.data.productDetail = await this.listProductsService.getProductDetail();
        } catch (e) {
            console.error(e);
            alert('Server error')
        }
    })

}

export default ListProductStore;
