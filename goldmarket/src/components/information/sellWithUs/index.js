import './index.css';
import {srcGirl, textFromGirl} from "src/components/information/sellWithUs/constants";
import Text from "../text";
import Image from "../image";


const SellWithUs = () => {

    return(
        <div className="container">
            <Text text={textFromGirl} />
            <Image image={srcGirl} />
        </div>
    )
}

export default SellWithUs;