import './Header.css'
import Link from './../link/Link'

export function Header(){
  return(
    <header className='header-header'>
      <div>
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