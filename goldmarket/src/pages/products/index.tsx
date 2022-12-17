import React from 'react';
import { useParams } from "react-router-dom";

const Products = () => {
    const { id } = useParams();

    return (
        <div>
            this is products page
        </div>
    );
};

export default Products;