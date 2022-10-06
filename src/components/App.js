import React, { useState } from "react";
import Nav from "./Nav";
import HogCard from "./HogCard";
import FilterHog from "./FilterHog";
import HogSubmit from "./HogSubmit";
import SortHog from "./SortHog"

import hogs from "../porkers_data";

function App() {

	const [filterHog, setFilterHog] = useState('All')
	//MyFail: put spread separate from empty strings
	const [aHog, setAHog] = useState([...hogs], '')
	const [addHog, setAddHog] = useState({
		name: '',
		specialty: '',
		greased: '',
		weight: '',
		image: ''
	})

	console.log(addHog)
	console.log(hogs)
	console.log(aHog)
	function onHandleChange(moreHogs) {
	//MyFail: pass a parameter after setAHog. line below shouldn't be 'setAhog(...hogs,moreHogs).  This will return the first object in hogs array from ../parkers_data'
		setAHog(hogs => [...hogs, moreHogs])
	}

	const filterHogs = aHog.filter(hog => {
		if (filterHog === "All") return true; 

			return hog.greased === filterHog
		})

	return (
		<div className="App">
			<FilterHog setFilterHog={setFilterHog}/>
			<SortHog aHog={aHog} setAHog={setAHog}/>
			<HogSubmit onHandleChange={onHandleChange} addHog={addHog} setAddHog={setAddHog}/>
			{filterHogs.map(hog =>
			<HogCard hog={hog} key={hog.id}/>)}
			<Nav />
		</div>
	);
}

export default App;