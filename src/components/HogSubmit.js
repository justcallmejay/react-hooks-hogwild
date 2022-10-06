import React from "react";

export default function HogSubmit({ onHandleChange, setAddHog, addHog }) {

    function onHogs(e) {
        const { name, value } = e.target
        
        setAddHog(addHog => {
        return {...addHog,
        [name]: value
    }})    
}

function handleSubmit(e) {
    e.preventDefault();
    onHandleChange(addHog);
    setAddHog(addHog);
}
    
    return (
    <form className="hogform" onSubmit={handleSubmit}>
        <input type="text" name="name" value={addHog.name} onChange={onHogs} placeholder="Name"/>
        <input type="text" name="specialty" value={addHog.speciality} onChange={onHogs} placeholder="Specialty"/>
        <select onChange={onHogs}>
        <option value=""></option>
        <option value="Greased">Greased</option>
        <option value="Not Greased">Not Greased</option>
        </select>
        <input type="number" name="weight" value={addHog.weight} onChange={onHogs}></input>
        <input type="text" name="image" value={addHog.image} onChange={onHogs}></input>
        <button>Submit Hog</button>
    </form>
    )
}