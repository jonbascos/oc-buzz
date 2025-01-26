import './Header.css'
import logo from '../../assets/oc-events-logo.png'

function Header() {
    return(
        <>
            <header>
                <div className="logo">
                     <img src={logo} alt="honeybee over the state of oregon in a beehive formation" className="logo-img" />
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="#" target='_blank'>Home</a></li>
                        <li><a href="#" target='_blank'>Events</a></li>
                        <li><a href="#" target='_blank'>Eats/Drinks</a></li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header