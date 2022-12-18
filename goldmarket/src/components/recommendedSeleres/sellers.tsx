import React from 'react';
import {DataSeller} from "src/data/recommendedSellers";

const Sellers = (product: DataSeller) => {
    const {id, name, title, images} = product

    return (

        <div className={"block_recommender_child"}>
            <div className={"block_recommender_child"}>
                {/*FIXME: fix key*/}
                {images.map((image, index) => <img
                    key={index}
                    className={"block_recommender_child_jewelry"}
                    src={image}
                    alt=""
                />
                )}
                <div>
                    <h4>{name}</h4>
                    <span>{title}</span>
                </div>

            </div>
        </div>
    );
};

export default Sellers;