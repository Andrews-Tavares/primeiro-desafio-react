import './App.css';
import Button from './componets/button/button';
import Header from './componets/header/header';

const messageLabel = (label) => {
    alert("A label desse botão é " + label)
}

function App() {
  return <>
    <Header text={{ color: 'limegreen', textTransform: 'uppercase'}} />
    <Button label='Clique aqui' message={messageLabel}/>
  </>
}

export default App;
