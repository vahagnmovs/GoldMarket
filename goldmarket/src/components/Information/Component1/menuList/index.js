import { menuInfo } from "../constants";
import MenuItem from "./menuItem";

import '.././index.css'

export default function MenuList() {



    return (
        <div className='containerMenu'>
            {menuInfo.map(e => <MenuItem key={e.id} {...e} /> )}
        </div>
    )
}