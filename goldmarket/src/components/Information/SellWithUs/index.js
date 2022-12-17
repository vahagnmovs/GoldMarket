import Image from "../image"
import Text from "../text"
import './index.css';
import { srcGirl, textFromGirl, } from "./constants";

const SellWithUs = () => {

    return(
        <div className="container">
            <Text text={textFromGirl} />
            <Image image={srcGirl} />
        </div>
    )
}

export default SellWithUs;