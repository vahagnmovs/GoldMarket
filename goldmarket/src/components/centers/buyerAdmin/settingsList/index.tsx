import React from 'react'
import Dashboard from '../dashboard'

const SettingsList = () => {
   return (
      <div>
         <Dashboard />
         <h4>MY ACCOUNT</h4>
         <h3>Settings</h3>
         <div>
            <h4>Personal information</h4>
            <div>
               <input type="text" placeholder='NAME' />
               <input type="email" placeholder='EMAIL' />
            </div>
            <div>
               <input type="text" placeholder='SURNAME'/>
               <input type="text" placeholder='PHONE'/>
            </div>
         </div>
      </div>
   )
}

export default SettingsList