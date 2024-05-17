import { Link } from "react-router-dom"

const Header = () => {
    return(
        <nav>
            <link to='/'>Home</link>
            <span>|</span>
            <link to='sobre'>Sobre</link>
            <span>|</span>
            <link to='contato'>Contato</link>
            <span>|</span>
        </nav>
    )
}
export default Header;