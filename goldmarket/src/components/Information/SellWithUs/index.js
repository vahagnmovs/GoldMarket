import Image from "../Image"
import Text from "../Text"
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