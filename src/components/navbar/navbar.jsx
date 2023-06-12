import style from './navbar.module.css'
import logo from '../../assets/img/bonfire.gif'

export default function Navbar() {
 return (
  <header>
   <div className={style.headerLogo}>
    <img src={logo} alt="" />
   </div>
   <nav>
    <NavbarDropdown />
   </nav>
  </header>
 )
}

function NavbarDropdown() {
 return (
  <ul>
   <li><a href="#">projects</a></li>
   <li><a href="https://github.com/kristofferfh/my-first-react-project">github</a></li>
   <li><a href="#">contact me</a></li>
  </ul>
 )
}