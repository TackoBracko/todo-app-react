import Header from "./components/Header.jsx"
import TasksWrapper from "./components/TasksWrapper.jsx"
//import TodoForm from "./components/TodoForm.jsx"
//import TodoList from "./components/TodoList.jsx"
//import TodoButtons from "./components/TodoButtons.jsx"
import { useState } from "react"

function App() {
    const [darkMode, setDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode)
    }

    return (
        <>
            <div className={`app_container ${darkMode ? 'dark_mode' : 'light_mode'}`}>
                <div className='container'>
                    <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <TasksWrapper />
                </div>
            </div>
        </>
    )
}

export default App;

