
import React, { useContext } from 'react'
import { TaskListContext } from './TaskListContext'

const Task = ({ task }) => {
    const { removeTask, findItem, completeItem } = useContext(TaskListContext)
    return (
        <li className="list-item">
            <span>{task.title} </span>
            <div>
                <button
                    className="btn-delete task-btn"
                    onClick={() => removeTask(task.id)}
                >
                    <i className="fas fa-trash-alt"></i>
                </button>{' '}
                <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
                {/* <button className="btn-complete task-btn" onClick={() => completeItem(task.id)}>
                    <i className="fas fa-check" style={{ color: "gray" }}></i>
                </button> */}
            </div>
        </li>
    )
}

export default Task