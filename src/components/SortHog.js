import React, { useState, useEffect } from "react";

export default function SortHog( { aHog, setAHog } ) {

    const [sortBy, setSortBy] = useState('')

    useEffect(()=> {
        if (sortBy === "A-Z") {
            const sortedName = sortName()
            setAHog(sortedName)
        } else if (sortBy === "Z-A"){
        const sortedNameZ = sortNameBackwards()
        setAHog(sortedNameZ)
        } else if (sortBy === "light") {
            const sortedWeight = sortWeight()
            setAHog(sortedWeight)
        } else if (sortBy === "heavy") {
            const sortedHeavy = sortHeaviest()
            setAHog(sortedHeavy)
        }
    }, [sortBy])

    function sortName() {
        return [...aHog].sort(function(a, b) {
            let nameA = a.name.toUpperCase();
            let nameB = b.name.toUpperCase();
            if (nameA > nameB) {
            return 1
            }
            else if (nameA < nameB) {
            return -1
            }
            return 0
    })
}

function sortNameBackwards() {
    return [...aHog].sort(function(a,b) {
        let nameA = a.name.toUpperCase();
        let nameB = b.name.toUpperCase();
        if (nameB > nameA) {
            return 1;
        } else if (nameA > nameB) {
            return -1;
        }
        return 0
    })
}

function sortWeight() {
    return [...aHog].sort(function(a,b) {
        return a.weight - b.weight 
    })
}

function sortHeaviest() {
    return [...aHog].sort(function(a, b) {
        return b.weight - a.weight
    })
}

    return (
    <div className="sort">
        <select onChange={(e) => setSortBy(e.target.value)}>
            <option value=""></option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="light">Light</option>
            <option value="heavy">Heavy</option>
        </select>
    </div>
    )
}
