import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {

    const product = props.product;

    return (
        <div className="col-4 mb-4 bg-light box-shadow">
            <div className="card mt-2">
                <Link to={"/product/" + product.id}>
                    <img alt="" className="card-img-top product-img" src={product.image} />
                </Link>
            </div>
            <div className="card-body ">
                <h4>{product.type}</h4>
                <p className="card-text">{product.description}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <Link to={"/product/" + product.id}>Discover more </Link>
                </div>
            </div>

        </div>
    );
}

export default Product;


