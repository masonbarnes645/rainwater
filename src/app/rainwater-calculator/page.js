'use client'

import { useState, useEffect } from 'react';
import styles from "./Calc.module.css"
import { Box } from '@mui/material';

export default function Calc() {
    const [selectedPlaceRain, setSelectedPlaceRain] = useState(24)
    const [roofArea, setRoofArea] = useState(0)
    const [result, setResult] = useState(null)

    const rainfall = [
        { city: 'Oakland, California', rain: 24 },
        { city: 'New York City, New York', rain: 47.3 },
        { city: 'Dallas, Texas', rain: 35.8 },
        { city: 'Buenos Aires, Argentina', rain: 40 },
        { city: 'Tokyo, Japan', rain: 60.2 },
        { city: 'Beijing, China', rain: 25.1 },
        { city: 'Tehran, Iran', rain: 9.1 },
        { city: 'London, England', rain: 24 },
        { city: 'Dublin, Ireland', rain: 28.9 },
        { city: 'Rome, Italy', rain: 28.9 },
        { city: 'Canberra, Australia', rain: 24.8 },
        { city: 'Nairobi, Kenya', rain: 35.4 },
        { city: 'Accra, Ghana', rain: 29.8 },
        { city: 'Johannesburg, South Africa', rain: 28.7 }
    ];

    useEffect(() => {
        setResult(Math.floor((roofArea * (selectedPlaceRain / 12)) * 7.48))
    }, [roofArea, selectedPlaceRain]);



    return (
        <Box sx={{marginX:'25%', marginTop:'10%'}}>
            <Box>
                <h1> Rainwater Collection Calculator</h1>
                <p>{blurb}</p>
            </Box>
            <Box sx={{marginTop:'50px'}}>
                <form>
                    <label style={{fontSize:'30px'}}> Roof Area (in feet): </label>
                    <input type="number" value={roofArea} onChange={(e) => setRoofArea(e.target.value)}></input>
                    <label style={{fontSize:'30px'}}>City: </label>
                    <select onChange={(e) => setSelectedPlaceRain(e.target.value)}>
                        {rainfall.map((place) => <option key={place.city} value={place.rain}>{place.city}</option>)}
                    </select>
                </form>
                <h1>{result} Gallons per Year</h1>
            </Box>
        </Box>
    )
}





const blurb = `This tool helps you estimate how much rainwater can be collected from your roof based on your location and the size of your roof. Simply input the area of your roof in square feet, select your city, and let the calculator do the rest! It provides an estimate of the total amount of rainwater you could collect in gallons over a year.

Rainwater collection is an eco-friendly way to conserve water and reduce your environmental footprint. Whether you’re planning for a rain barrel system or considering larger rainwater harvesting solutions, this calculator is a great first step in understanding your water collection potential.`