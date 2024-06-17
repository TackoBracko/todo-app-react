import Header from "./components/Header.jsx"
import TodoForm from "./components/TodoForm.jsx"
import TodoList from "./components/TodoList.jsx"
import TodoButtons from "./components/TodoButtons.jsx"
import { useState } from "react"
//import Practice from "../src/Practice.jsx"

function App() {
    /*const currDate = new Date()
    const tasksPractice = [
        {title: 'Hi'},
        {title: 'I am new to this'},
        {title: 'But, I will figure it out'},
        {title: '"Just need to practice'},
        {title: 'Bye'}
    ]*/

    const [darkMode, setDarkMode] = useState(true);
    const [tasks, setTasks] = useState([]);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    };

    function addTodoTask(inputTaskValue) {
        const newTask = {
            title: inputTaskValue,
            id: Math.random()
        };
        
        setTasks([...tasks, newTask]);
    }

    return (
        <>
            <div className={`app_container ${darkMode ? 'dark_mode' : 'light_mode'}`}>
                <div className='container'>
                    <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode}
                        data={
                            {   title:'TODO', 
                                /*time:{
                                    currDate: currDate.toLocaleDateString(),
                                    currTime: currDate.toLocaleTimeString()
                                }*/
                            } 
                        }
                    />
                    <TodoForm addTodoTask={addTodoTask} />
                    <TodoList tasks={tasks} />
                    <TodoButtons />
                </div>
            </div>
        </>
    );
}

export default App;

