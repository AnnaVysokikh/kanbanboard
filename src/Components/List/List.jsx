import { useState } from 'react'
import { LIST_TYPES } from '../../config'
import css from './List.module.css'

const List = props => {
    const {title, type, tasks, settasks} = props
    const [isFormVisible, setFormVisible] = useState(false)

	const handleAddNewClick = () => {
		setFormVisible(!isFormVisible)
	}
    const handleMovedClick = () => {
		setFormVisible(!isFormVisible)
	}

	// const formSubmit = (title, description) => {
	// 	addNewTask(title, description)
	// 	setFormVisible(false)
	// }

    return (
        <div className={css.list}>
            <h2 className={css.listTitle}>{title}</h2>
            {tasks.map(task => {
                return (
                    <div key={task.id} className={css.task}>{task.title}</div>
                )
            })}
            {type === LIST_TYPES.BACKLOG && (
                <button className={css.addButton} onClick={handleAddNewClick}>+ Add card</button>
            )}
            {/* {type !== LIST_TYPES.BACKLOG && (
                <button className={css.addButton} onClick={handleMovedClick}>+ Add card</button>
            )} */}
        </div>
    )
}

export default List