import './estilo.css'
import logo from '../../imagens/logo.svg'

function Logo () {
    return(
        <div className='logo'>
            <img 
            src={logo} 
            alt='logo'
            className='logo-img'
            ></img>
            <p><strong>Loja </strong> de livros</p>
        </div>
    )
}

export default Logo