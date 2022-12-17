import "src/style/components/_banner.scss"
import banner1 from "src/style/img/banner1.png";

const SellWithUs = () => {

    return(
        <div className={"banner_1"}>
            <div className="banner_1_center flex justify-between align-center">
                <div className={"banner_1_title align-center text-center"}>
                    <h3>Sell with us</h3>
                    <p>With a long history of fine craftsmanship,<br/> Italian gold jewelry from brings sophistication and style to any outfit. </p>
                    <button> START SELLING</button>
                </div>
                <div className={"banner_img "}>
                    <img src={banner1}  alt={"banner1"}/>
                </div>
            </div>
        </div>
    )
}

export default SellWithUs;
