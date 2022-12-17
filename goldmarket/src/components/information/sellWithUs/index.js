import Text from "../text";
import Image from "../image";

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