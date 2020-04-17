import React from 'react';
import {useParams} from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetail = () => {
  
    const {productKey} = useParams();

    const product = fakeData.find( pd => pd.key === productKey);

    return (
        <div>
            <h2>Your Products Details</h2>
            <Product showAddCartBtn={false} product={product}></Product>
        </div>
    );
};

export default ProductDetail;