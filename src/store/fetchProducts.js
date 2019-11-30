import { fetchPopular, fetchAll, fetchById } from './actions'
import ProductAPI from '../api/ProductAPI'

export const fetchAllProducts = () => {
    return async dispatch => {
        const products = ProductAPI.getAll();
        dispatch(fetchAll(products));
        return products;
    }
}

export const fetchProductById = (id) => {
    return dispatch => {
        const product = ProductAPI.getById(id);
        dispatch(fetchById(product))
        return product;
    }
}

/* export const fetchPopularProducts = () => {
    return dispatch => {
        const produc
        dispatch(fetchPopular());
        return ProductAPI.getPopular();
    }
} */