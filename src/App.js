import logo from './logo.svg';
import './App.css';
import MyComponent from './components/MyComponent';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';

function App() {
  console.log('Esto va bien');
  const value = 1000;
  return (
    <div>
      <NavBar/>
    <p className="App">
      LES PRESENTO
    </p>
    <p className="App">
      AlCe Sound and Lightning
    </p>
    <MyComponent name='Luz y Sonido' value={value}/>
    <MyComponent name='Brincolín' value={500}/>
    <ItemListContainer greeting={'Productos'} />
    <h1>PRODUCTOS</h1>
        <li>Luz y Sonido para Fiestas</li>
        <li>Renta de inflables infantiles</li>
        <li>Renta de mobiliario</li>
  </div>
  );
}

export default App;
