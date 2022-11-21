import React from 'react';
import {Link } from "react-router-dom";

const cities = [
    {
        name: 'Yerevan',
    },
    {
        cityID: 2,
        name: 'Gyumri'
    }
]

const Cities = () => {
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