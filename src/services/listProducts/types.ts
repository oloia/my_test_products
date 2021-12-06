export interface ProductDetail {
    id: string;
    name: string;
    price: number;
    image: string;
}

export interface ListProductsServiceInterface {
    getProductDetail(): Promise<ProductDetail[]>;
}
