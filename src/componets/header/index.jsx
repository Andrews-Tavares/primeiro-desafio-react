import './index.css';

const Header = ({text}) => {
    return (
        <div className="card" style={text}>

            <h2>Titulo</h2>
            <p>Componente que colore e transforma um texto para maiúsculo</p>
        </div>
    )
}



export default Header;