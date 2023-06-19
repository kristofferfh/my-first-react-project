import style from './navbar.module.css'
import logo from '../../assets/img/bonfire.gif'
import SearchBox from '../searchbox/searchbox'
import ExternalLink from '../elements/externalLink'

export default function Navbar() {
 return (
  <header>
   <div className={style.headerLogo}>
    <img src={logo} alt="" />
   </div>
   <nav>
    <SearchBox />
    <NavbarDropdown />
   </nav>
  </header>
 )
}

function NavbarDropdown() {
 return (
  <ul>
   <li><a href="#">projects</a></li>
   <li><ExternalLink href="https://github.com/kristofferfh/my-first-react-project" name="github" /></li>
   <li><a href="#">contact me</a></li>
  </ul>
 )
}