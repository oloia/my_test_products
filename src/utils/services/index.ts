import {ENV} from "../../config/env";


export const extractId = (url: string): string => url.split('/')[url.split('/').length - 1];
export const productId = (id: string): string => `${ENV.API_BASE_URL}/items/test_products/${id}`;

