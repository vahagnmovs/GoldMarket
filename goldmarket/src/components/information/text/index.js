const Text = ({ text }) => {
    
    return(
        <div className='aboutUs'>
             <h3>About Us</h3>
             <p className='aboutText'> {text} </p>

             <button className='aboutBtn'>ABOUT US</button>
        </div>
    )
}

export default Text;