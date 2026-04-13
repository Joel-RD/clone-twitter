import { Icon } from "../hooks/IconsComponents";
import profilePic from "../assets/profilePick.jpg";
import "../styles/contentNav.css"

export const SliderNav = () => {
    return (
        <nav className="nav-slider-content">
            <ul className="nav-slider-ul">
                <a href="">
                    <Icon name="xLogo" className="nav-icons nav-icon-x" />
                </a>
                <a href="">
                    <Icon name="home" className="nav-icons" />
                    <li>Inicio</li>
                </a>
                <a href="">
                    <Icon name="search" className="nav-icons" />
                    <li>explorar</li>
                </a> <a href="">
                    <Icon name="alert" className="nav-icons" />
                    <li>notificaciones</li>
                </a> <a href="">
                    <Icon name="userPlus" className="nav-icons" />
                    <li>Seguir</li>
                </a> <a href="">
                    <Icon name="chat" className="nav-icons" />
                    <li>chat</li>
                </a> <a href="">
                    <Icon name="GrokLogo" className="nav-icons" />
                    <li>Grok</li>
                </a> <a href="">
                    <Icon name="savedElement" className="nav-icons" />
                    <li>Guardado</li>
                </a> <a href="">
                    <Icon name="rocket" className="nav-icons" />
                    <li>Aprendizaje</li>
                </a> <a href="">
                    <Icon name="GrokLogo" className="nav-icons" />
                    <li>Premium</li>
                </a> <a href="">
                    <Icon name="user" className="nav-icons" />
                    <li>profile</li>
                </a>
                <a href="">
                    <Icon name="more" className="nav-icons" />
                    <li>Mas opciones</li>
                </a>
                <button>postear</button>
            </ul>

            <aside className="nav-details-profile">
                <img src={profilePic} alt="user-profile-pick" />
                <div>
                    <strong>Joel:-01</strong>
                    <span>@JoelEudyRD</span>
                </div>
                <Icon name="more" className="nav-icons nav-icons-user-profile" />
            </aside>
        </nav>
    )
}