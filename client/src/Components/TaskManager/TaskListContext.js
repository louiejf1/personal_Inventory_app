import React, { createContext, useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const TaskListContext = createContext()

const TaskListContextProvider = props => {
    const initialState = JSON.parse(localStorage.getItem('tasks')) || []

    const [tasks, setTasks] = useState(initialState)

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const [editItem, setEditItem] = useState(null)

    // Add tasks
    const addTask = title => {
        setTasks([...tasks, { title, id: uuidv4() }])
    }

    // Remove tasks
    const removeTask = id => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    // Clear tasks
    const clearList = () => {
        setTasks([])
    }

    // Find task
    const findItem = id => {
        const item = tasks.find(task => task.id === id)

        setEditItem(item)
    }

    // Edit task
    const editTask = (title, id) => {
        const newTasks = tasks.map(task => (task.id === id ? { title, id } : task))

        console.log(newTasks)

        setTasks(newTasks)
        setEditItem(null)
    }

    // Complete task
    // const completeTask = (title, id) => {
    //     const completeTasks = tasks.map(task => (task.id === id ? { textDecoration: task.complete ? "line-through" : "none" } : task))
    //     setTasks(completeTasks)
    //     setEditItem(null)
    // }

    return (
        <TaskListContext.Provider
            value={{
                tasks,
                addTask,
                removeTask,
                clearList,
                findItem,
                editTask,
                editItem
            }}
        >
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider