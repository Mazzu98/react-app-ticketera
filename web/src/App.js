import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Clientes from './pages/clientes';
import Control from './pages/control';
import Home from './pages/home';
import Zonales from './pages/zonales';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <header className="container" style={{height: "70px"}}>
        <div className='justify-content-center d-flex gap-5'>
            <Link to='/'>Inicio</Link>
            <Link to='/control'>Control de desperfecos</Link>
            <Link to='/zona'>Datos zonales</Link>
            <Link to='/clientes'>Clientes</Link>
        </div>
      </header>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/control" element={<Control/>} />
          <Route path="/zona" element={<Zonales/>} />
          <Route path="/clientes" element={<Clientes/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
