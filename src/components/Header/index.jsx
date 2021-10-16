import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav>
      {/* <h1>Page principale</h1> */}
      <Link to="/">Accueil</Link>
      <Link to="/survey/1">Questionnaire</Link>
      <Link to="/freelances">Freelances</Link>
    </nav>
  )
}

export default Header