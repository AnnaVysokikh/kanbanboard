import css from './Main.module.css'
import Board from '../Board/Board'
import TaskDetail from '../TaskDetail/TaskDetail';
import { Routes, Route } from "react-router-dom";

const Main = (props) => {

	return (
		<main className={css.main}>
			<Routes>
				<Route exact path={'/'} element ={<Board {...props}/>}/>
				<Route path={'/tasks/:taskId'} element={<TaskDetail {...props}/>}/>
			</Routes>
		</main>
	)
}

export default Main