import * as types from './types';

export const fetchAll = (products) => ({
    type: types.FETCH_ALL_PRODUCTS,
    products: products
})

export const fetchPopular = (products) => ({
    type: types.FETCH_POPULAR_PRODUCTS,
    products: products
})

export const fetchById = (product) => ({
    type: types.FETCH_PRODUCT_BY_ID,
    product: product
}) 