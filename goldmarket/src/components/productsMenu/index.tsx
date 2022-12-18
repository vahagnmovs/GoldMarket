import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'



export const SellerNavBar: React.FC = () => {

    const navigate = useNavigate()

    const handleProduct = () => {

    }


    return(
      <>
        <header className='header'>
            <div>
                <span> DASHBOARD </span>
            </div>
            <div>
                <span> PRODUCT </span>
            </div>
            <div>
                <span> SOLD </span>
            </div>
            <div>
                <span> FAKE JEWELRY </span>
            </div>
            <div>
                <span> SETTINGS </span>
            </div>
            <div>
                <span> LOG OUT </span>
            </div>
        </header>

        <main>
            <Outlet />
        </main>
        <br></br>
        <hr></hr>
        {/* <footer>
            2022
        </footer> */}
     </>
    )
}