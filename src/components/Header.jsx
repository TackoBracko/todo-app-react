import SunIcon from '../assets/icon-sun.svg'
import MoonIcon from '../assets/icon-moon.svg'

export default function Header({darkMode, toggleDarkMode}) {

    return (
        <header className='header_content'>
            <h1>TODO</h1>
            <button className='btn_icon_toggle' onClick={toggleDarkMode}>
                {darkMode ? <img src={SunIcon} /> : <img src={MoonIcon} />}
            </button>
        </header>
    )
}