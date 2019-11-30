import * as types from './types'

const initialState = {
    products: [],
    product: undefined
}

export const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case types.FETCH_ALL_PRODUCTS:
            return {
                ...state,
                products: action.products
            };
        case "GET_POPULAR_PRODUCTS": {
            return {
                ...state,
                products: action.products
            }
        }
        case types.FETCH_PRODUCT_BY_ID: {
            return {
                products: undefined,
                product: action.product
            }
        }
        default:
            return state;
    }
}

export const getProducts = state => state.products;
export const getProductById = state => state.product;
//export const getPopularProducts = state => state.products;