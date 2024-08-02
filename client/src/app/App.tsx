import React from 'react';
import './App.css';
import Navbar from '../widgets/navbar/Navbar';


function App(): JSX.Element {
	const currentDate = new Date().getDay().toString()
	console.log(currentDate);
	
	
  return (
	<>
	<Navbar/>
    <div className="App">
		<div>
			{currentDate}
		</div>
    </div>

	</>
  );
}

export default App;
