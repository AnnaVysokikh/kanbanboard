import css from "./TaskDetail.module.css";
import { useParams } from "react-router-dom";
import Close from "../../assets/close.png";
import { Link } from "react-router-dom";
import notFoundIcon from '../../assets/not-found.svg'

const TaskDetail = (props) => {
	const params = useParams();
	const { taskId } = params;
	const {tasks, setTasks} = props
	const task = tasks.find((task) => task.id === taskId);

	const renderTaskDetails = () => {
		return (
			<>
				<p>Description: {task.description || 'This task has no description'}</p>
			</>
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