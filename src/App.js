import './index.css';
import Button from './componets/AlertButton';
import Header from './componets/header';

function App() {
  return <>
    <Header text={{ color: 'limegreen', textTransform: 'uppercase'}} />
    <Button label='Clique aqui'/>
  </>
}

export default App;
