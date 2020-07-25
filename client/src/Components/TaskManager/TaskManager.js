import React from "react";
import TaskListContextProvider from "./TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

import "./style.css";
import Header from "./Header";

const TaskManager = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <TaskForm />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
};

export default TaskManager;