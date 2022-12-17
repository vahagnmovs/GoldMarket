import Text from "../text";
import Image from "../image";

import { srcGold, textFromGold } from './constants';
import './index.css';


const AboutUs = () => {

    return(
        <div className="container">
            <Image image={srcGold} />
            <Text text={textFromGold} />
        </div>
    )
}

export default AboutUs;