import React, { useState } from "react";

export default function HogCard( {hog} ) {

    const [displayHog, setDisplayHog] = useState(false)
    const [displayHogStatistics, setDisplayHogstats] = useState('')

    const display = 
    <>
    <div>Specialty: {hog.specialty}</div>
    <div>Greased? {hog.greased}</div>
    <div>Weight: {hog.weight}</div>
    </>

    function displayStats() {
        setDisplayHog(!displayHog);
        if (displayHog) {
            console.log('bye')
            return setDisplayHogstats(null)
        } else if (!displayHog) {
            console.log('hi')
            return (
                setDisplayHogstats(display)
            )}
    }

    return (
        <div className="pigTile" onClick={displayStats}>
            <h1>{hog.name}</h1>
            <img src={hog.image} alt={hog.name}/>
            <p>{displayHogStatistics}</p>
        </div>
    )
}