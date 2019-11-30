/* import React from 'react'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchProductById } from '../store/fetchProducts'
import { getProductById } from '../store/reducer'

class SingleProductView extends React.Component {

    componentWillMount() {
        const { fetchProductById } = this.props;

    }
}

const mapStateToProps = (state, ownProps) => {

    const id = ownProps.match.params.parameterToAccess;
    const product = getProductById(id);

    return {
        product: product
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProductById: fetchProductById
}, dispatch); */