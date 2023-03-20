import css from './Footer.module.css'

const Footer = () => {
	return (
        <footer className={css.footer}>
			<div className={css.taskinfo}>
				<span>Active task: 1</span>
            	<span>Finished task: 1</span>
			</div>
            <div>
				<span>Kanban board by Anna Vysokikh, 2023</span>
			</div>
        </footer>
	)
}

export default Footer