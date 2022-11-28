import React from 'react';
import {Link, useNavigate} from "react-router-dom";


const cities = [
    {
        cityID: 1,
        name: 'Yerevan',
    },
    {
        cityID: 2,
        name: 'Gyumri'
    }
]

const Cities = () => {
    const navigate = useNavigate();
    return (
        <div>
            this is shoppingRegions/cities
            {
                cities.map(city => <Link to={`/shoppingregions/cities/${city.cityID}`}>{city.name}</Link>)
            }
        </div>
    );
};

export default Cities;