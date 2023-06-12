import './navbar.css'

export default function Navbar() {
 return (
  <header>
   <div>
    <img src="" alt="" />
    <p>logo</p>
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
   <li>home</li>
   <li>projects</li>
   <li>contact me</li>
  </ul>
 )
}