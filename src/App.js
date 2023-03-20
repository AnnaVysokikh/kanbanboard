import { useState } from 'react';

import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'
import data from './mock.json'

function App() {
	const [tasks, setTasks] = useState(data)
	return (
			<div className='wrapper'>
					<Header />
					<Main tasks={tasks} setTasks={setTasks} />
					<Footer tasks={tasks} />
			</div>
	)
}

export default App
