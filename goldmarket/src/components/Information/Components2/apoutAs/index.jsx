import { textFromGold } from "../constants";

export default function AboutUs() {
    
    return(
        <div className='aboutUs'>
             <h3>About Us</h3>
             <p className='aboutText'> {textFromGold} </p>

             <button className='aboutBtn'>ABOUT US</button>
        </div>
    )
}