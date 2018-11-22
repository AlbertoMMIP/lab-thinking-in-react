import React from 'react';
import ProductRow from "./ProductRow";

const ProductCategoryRow = ({data}) => (
    <tbody>
        <tr>
            <td colSpan="2">hola</td>
        </tr>
        {data.forEach((ele) =>{
            return <ProductRow name={ele.name} price={ele.price} />
        })}

    </tbody>
);

export default ProductCategoryRow;