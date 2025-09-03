import useProduct from "./hooks/useProduct";
import React from 'react';

const Product = () => {
        const [product] = useProduct()
        console.log(product);
    return (
        <div>
            <h3>It show product</h3>
            
        </div>
    );
};

export default Product;