import uniqid from 'uniqid'
import css from './Board.module.css'
import { LIST_TYPES, LIST_COPY} from '../../config'
import List from '../List/List'

const Board = (props) => {
	const {tasks, setTasks} = props
	const addNewTask = (title, description) => {
		const task = {
			id: uniqid(),
			title,
			description,
			status: 'backlog', 
		}

		setTasks([...tasks, task]);
	}

	const changeStatus = (taskId, newStatus) => {
		const newtask = tasks.find((task) => task.id === taskId);
		if (newtask) {
			const updatedTasks = tasks.filter(item => item.id !== taskId)
			newtask.status = newStatus
			setTasks([...updatedTasks, newtask])
		}
	}

	const getStatus = (status) => {
		switch (status) {
			case LIST_TYPES.READY:
				return LIST_TYPES.BACKLOG;
			case LIST_TYPES.IN_PROGRESS:
				return LIST_TYPES.READY;
			case LIST_TYPES.FINISHED:
			 	return LIST_TYPES.IN_PROGRESS;
			default:
				return [];
		}
	}

	const checkStatus = (status) => {
		return tasks.filter((task) => task.status === getStatus(status)).length === 0 ? false : true
	}

	const getTasksByState = (status) => {
		var options = [];
		var newTask = [];
		newTask = tasks.filter((task) => task.status === getStatus(status))
		newTask.forEach(t => {options.push({value: t.id, label:t.title})})

		return options
	}

	return (
		<div className={css.board}>
	        {Object.values(LIST_TYPES).map(type => {
	            const listTasks = tasks.filter(task => task.status === type)
	            return (
	                <List
						key={LIST_COPY[type]}
						type={type}
						title={LIST_COPY[type]}
						tasks={listTasks || []}
						addNewTask={addNewTask}
						getTasksByState={getTasksByState}
						changeStatus={changeStatus}
						checkStatus={checkStatus}
					/>
	            )
	        })}
	    </div>
	)
}

export default Board