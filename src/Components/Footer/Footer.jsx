import css from './Footer.module.css'
import { LIST_TYPES } from '../../config'

const Footer = (props) => {
	const {tasks} = props

	return (
        <footer className={css.footer}>
			<div className={css.taskinfo}>
				<span>Active task: {tasks.filter(task => task.status === LIST_TYPES.BACKLOG).length}</span>
            	<span>Finished task: {tasks.filter(task => task.status === LIST_TYPES.FINISHED).length}</span>
			</div>
            <div>
				<span>Kanban board by Anna Vysokikh, 2023</span>
			</div>
        </footer>
	)
}

export default Footer