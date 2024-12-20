'use client'

import { useState, useEffect } from 'react';
import { z } from 'zod';


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
        <>
            <form>
                <label> Roof Area (in feet)</label>
                <input type="number" value={roofArea} onChange={(e) => setRoofArea(e.target.value)}></input>
                <select onChange={(e) => setSelectedPlaceRain(e.target.value)}>
                    {rainfall.map((place) => <option key={place.city} value={place.rain}>{place.city}</option>)}
                </select>
            </form>
            <h1>{result}</h1>
        </>
    )
}