import React from 'react';
import star from "src/style/Icons/star-regular.svg";
import {DataSeller} from "src/data/recommendedSellers";
import firebase from "firebase/compat";

const Sellers = (product: DataSeller) => {
    const {id, name, title, images} = product

    return (

        <div className={"block_recommender_child"}>
            <div className={"block_recommender_child"}>
                //FIXME: key change to id or....
                {images.map((image,index) => <img
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