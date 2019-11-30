import React from 'react';
import Product from './ProductListItem'

export default class ProductList extends React.Component {

    render() {

        const products = this.props.products

        return (
            <div className="album py-5 bg-white">
                <div className="container">
                    <div className="row">
                        {
                            products.map(p => (
                                <Product key={p.id} product={p} />
                            ))
                        }
                    </div>
                </div>
            </div>
        )
    }
};
