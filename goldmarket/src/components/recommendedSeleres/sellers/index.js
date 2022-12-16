import React from 'react';
import star from "src/style/Icons/star-regular.svg";

const Sellers = (props) => {
    const {id, images, name, title, like, starCount} = props;

    return (

        <div className={"block_recommender_child"}>
            <div className={"block_recommender_child"}>
                {images.map(image => <img
                    key={image.id}
                    className={"block_recommender_child_jewelry"}
                    src={image.img}
                    alt=""
                />
                )}
                <div>
                    <h4>{name}</h4>
                    <span>{title}</span>
                </div>
                <div className={"block_recommender_child_footer_star_block"}>
                    <img className={"star"} src={star} alt=""/>
                    <img className={"star"} src={star} alt=""/>
                    <img className={"star"} src={star} alt=""/>
                    <img className={"star"} src={star} alt=""/>
                    <img className={"star"} src={star} alt=""/>
                    <span className={"bolt"}>{starCount} </span><span>({like})</span>
                </div>
            </div>
        </div>
    );
};

export default Sellers;