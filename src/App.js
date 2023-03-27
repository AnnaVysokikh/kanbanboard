import { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Main from './Components/Main/Main'

function App() {
	const initialState = JSON.parse(window.localStorage.getItem('tasks')) || []
	const [tasks, setTasks] = useState(initialState)

	useEffect(() => {
		window.localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])
	return (
		<div className='wrapper'>
			<BrowserRouter>
				<Header />
				<Main tasks={tasks} setTasks={setTasks} />
				<Footer tasks={tasks} />
			</BrowserRouter>
		</div>
	)
}

export default App
