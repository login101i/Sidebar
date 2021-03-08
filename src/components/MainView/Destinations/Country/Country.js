import React from 'react';
import * as s from "./Country.styles";


const Country = (props) => {
    const country = props.match.params.country;

    const countries = {
        canada: {
            img: '/images/countries/canada.png',
            description: 'Canada is chilly'
        },
        brazil: {
            img: '/images/countries/brazil.png',
            description: 'Brazil is sunny'
        },
        australia: {
            img: '/images/countries/australia.png',
            description: 'Australia is boring'
        },
        india: {
            img: '/images/countries/india.png',
            description: 'India is awesome'
        },
        moldova: {
            img: '/images/countries/moldova.png',
            description: 'Moldova is beautiful'
        },
        kenya: {
            img: '/images/countries/kenya.png',
            description: 'Kenya is breathtaking'
        }
    }
    return (
        <s.CountryContainer>
            <s.CountryImage img={countries[country]['img']} />
            <s.CountryDescription>{countries[country]['description']}</s.CountryDescription>
        </s.CountryContainer>
    )
}

export default Country