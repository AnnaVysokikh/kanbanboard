import css from "./TaskDetail.module.css";
import { useParams } from "react-router-dom";
import Close from "../../assets/close.png";
import { Link } from "react-router-dom";
import notFoundIcon from '../../assets/not-found.svg'
import {useEffect, useState} from "react";

const TaskDetail = (props) => {
	const params = useParams();
	const { taskId } = params;
	const {tasks, setTasks} = props

	const [task, setTask] = useState();

    useEffect(() => {
        if (taskId) {
            setTask(tasks.find((task) => task.id === taskId))
        }
    }, [taskId])
	
	const onSave = () => {
		const updatedTasks = tasks.filter(item => item.id !== taskId)
		setTasks([...updatedTasks, task])
	}

	const renderTaskDetails = () => {
		return (
			<div className={css.wrapperdescription}>
				<p>{!task.description && 'This task has no description'}</p>
				<textarea className={css.description}
                    onChange={(e) =>
						setTask({
							...task,
							description: e.target.value
						})}
                    value={task.description}
                />
				<Link to={"/"}>
					<button className={css.buttonSave} onClick={() => {
						onSave()
					}}>Save and close</button>
				</Link>
			</div>
		)
	}

	const renderEmptyState = () => {
		return (
			<div className={css.emptyState}>
				<h2>Task with ID <em>{taskId}</em> was not found</h2>
				<img className={css.emptyStateIcon} src={notFoundIcon} alt='' />
			</div>
		)
	}  

	return (
		<div className={css.wrapper}>
			<div className={css.header}>
				<h2 className={css.title}>{task ? task.title : ""}</h2>
				<Link to={"/"}>
					<button className={css.buttonClose}>
					<img src={Close} alt="close task detail" />
					</button>
				</Link>
			</div>
			{task ? renderTaskDetails() : renderEmptyState()}
	  </div>
	);
  };
  
  export default TaskDetail;