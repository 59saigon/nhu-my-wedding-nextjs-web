import {Product} from "@/types/product";
import {BaseService} from "./base-service";
import {Const} from "@/lib/const";

class ProductService extends BaseService<Product> {
    constructor() {
        super(`${Const.PRODUCT}`);
    }


}

export const productService = new ProductService();
