import React from 'react';
import star from "src/style/Icons/star-regular.svg";
import { DataSeller } from "src/data/recommendedSellers";
import firebase from "firebase/compat";

const Sellers = (product: DataSeller) => {
    const { id, name, title, images } = product

    return (
        <div className={"recommender_sellers_block"}>
            <div className="list_recommender_jewelry_img">

                <div className={"flex flex-wrap gap_10"}>
                    {images.map((image) => <img
                        className={"recommender_jewelry"}
                        src={image}
                        alt=""
                    />
                    )}
                </div>
            </div>

            <div className='jewelry_brands flex'>
                {/* brand img */}
                <img src="" alt=" brand img" />
                <h4>{name}</h4>
                <span>{title}</span>
            </div>

        </div>
    );
};

export default Sellers;