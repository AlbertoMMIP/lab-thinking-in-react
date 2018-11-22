import React from 'react';
import ProductCategoryRow from "./ProductCategoryRow";

const ProductTable = (data) =>(
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <ProductCategoryRow data={data}/>
        </table>
    </div>
);

export default ProductTable;
