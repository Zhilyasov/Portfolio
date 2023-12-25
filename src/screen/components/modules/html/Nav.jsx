/* eslint-disable jsx-a11y/anchor-is-valid */
import '../../../../Bootstrap/bootstrap.min.css'
import '../../../styles/Nav.css'

const Nav = () => {
  return (
    <nav>
      <h3 className="logo"><b>Zhilyasov.dev</b></h3>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact" tabindex="-1" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav