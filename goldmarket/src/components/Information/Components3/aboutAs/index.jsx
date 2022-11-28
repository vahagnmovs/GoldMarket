import { textFromGirl } from "../constants";

export default function AboutUs() {
    
    return(
        <div className='aboutUs'>
             <h3>About Us</h3>
             <p className='aboutText'> {textFromGirl} </p>

             <button className='aboutBtn'>ABOUT US</button>
        </div>
    )
}