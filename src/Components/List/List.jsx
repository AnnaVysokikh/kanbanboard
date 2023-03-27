import { useState } from 'react'
import { LIST_TYPES } from '../../config'
import css from './List.module.css'
import Select from "react-dropdown-select";
import Scrollbars from "react-custom-scrollbars-2";
import { Link } from 'react-router-dom'

const List = props => {
    const {title, type, tasks, addNewTask, getTasksByState, changeStatus, checkStatus} = props
    const [isAddVisible, setAddVisible] = useState(false)
    const [inputTaskName, setInputTaskName] = useState()

    const [isMoveVisible, setMoveVisible] = useState(false)
    const [selectedTaskId, setSelectedTaskId] = useState(undefined)
    const hasTasks = tasks.length > 0;
	const handleAddNewClick = () => {
		setAddVisible(!isAddVisible)
	}
    const onInputTask = (e) => {
        setInputTaskName(e.target.value);
    }
	const handleSubmitClick = () => {
		console.log(inputTaskName);
        if (inputTaskName) {
            addNewTask(inputTaskName)
            setInputTaskName('');
        }
		setAddVisible(!isAddVisible)
	}

    const handleMoveClick = () => {
		setMoveVisible(!isMoveVisible)
	}
	const handleMoveSubmitClick = () => {
		setMoveVisible(!isMoveVisible)
        changeStatus(selectedTaskId, type)
	}
	const handleSelectClick = (e) => {
        setSelectedTaskId(e[0].value)
	}

    return (
        <div className={css.list}>
            <h2 className={css.listTitle}>{title}</h2>
            {hasTasks &&
                <Scrollbars autoHide autoHeight>
                    {tasks.map(task => {
                    return (
                        <Link to={`/tasks/${task.id}`} key={task.id} className={css.taskLink}>
                            <div className={css.task}>{task.title}</div>
                        </Link>
                    )})}
                </Scrollbars>
            }

            {isAddVisible && 
            <div className={css.newTask}>
                <input className={css.inputName} onInput={onInputTask} />
            </div>}
            {type === LIST_TYPES.BACKLOG && !isAddVisible && (
                <button className={css.addButton} onClick={handleAddNewClick}>+ Add card</button>
            )}
            {type === LIST_TYPES.BACKLOG && isAddVisible && (
                <button className={css.submitButton} onClick={handleSubmitClick}>Submit</button>
            )}

            {isMoveVisible && <Select color={"000000"} searchable={false} className={css.select} onChange={handleSelectClick} options={getTasksByState(type)}/>

            }
            {type !== LIST_TYPES.BACKLOG && !isMoveVisible && checkStatus(type) && (
                <button className={css.addButton} onClick={handleMoveClick}>+ Add card</button>
            )}
            {type !== LIST_TYPES.BACKLOG && isMoveVisible && (
                <button className={css.submitButton} onClick={handleMoveSubmitClick}>Submit</button>
            )}

        </div>
    )
}

export default List