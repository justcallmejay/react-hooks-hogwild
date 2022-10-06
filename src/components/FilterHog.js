import React from "react";

export default function FiterHog({ setFilterHog }) {
    return (
    <div className="filterhogs">Filter Hogs:
        <select onChange={(e) => setFilterHog(e.target.value)}>
            <option value="All">All</option>
            <option value="Greased">Greased</option>
            <option value="Not Greased">Not Greased</option>
        </select>
    </div>
    )
}