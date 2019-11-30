import React from 'react'

import ProductList from '../components/ProductList'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchAllProducts as fetchAllProductsAction } from '../store/fetchProducts'
import { getProducts } from '../store/reducer'

class ProductListView extends React.Component {

    componentWillMount() {
        const { fetchProducts } = this.props;
        fetchProducts();
    }

    render() {

        const { products } = this.props;
        return <ProductList products={products} />

    }
}

const mapStateToProps = state => ({
    products: getProducts(state)
});

const mapDespatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchAllProductsAction
}, dispatch);

export default connect(
    mapStateToProps,
    mapDespatchToProps)(ProductListView);