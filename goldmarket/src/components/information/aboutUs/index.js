import './index.css';
import {srcGold, textFromGold} from "src/components/information/aboutUs/constants";
import Text from "../text";
import Image from "../image";

const AboutUs = () => {

    return(
        <div className="container">
            <Image image={srcGold} />
            <Text text={textFromGold} />
        </div>
    )
}

export default AboutUs;