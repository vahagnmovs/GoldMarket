import './index.css';
import {srcGirl, textFromGirl} from "./constants";
import Text from "../Text";
import Image from "../Image";

const SellWithUs = () => {

    return(
        <div className="container">
            <Text text={textFromGirl} />
            <Image image={srcGirl} />
        </div>
    )
}

export default SellWithUs;