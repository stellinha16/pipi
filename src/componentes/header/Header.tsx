import './Header.css'
import Link from './../link/Link'
import imagem from "../img/header.png"

export function Header(){
  return(
    <header className='header-header'>
      <div>
      <img className='header-img' src= {imagem}/>
      </div>
      <nav>
        <ul>
          <li>
            <Link texto='Home'/>
          </li>
          <li>
          <Link texto='Noticia'/>
          </li>
          <li>
          <Link texto='Sobre'/>
          </li>
          <li>
          <Link texto='Contato'/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header