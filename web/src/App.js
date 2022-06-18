import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import Home from './pages/home';

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
          <Route path="/control" element={<h1 style={{color: "black"}}>lshdfkjshfsdf dsf sdf dsffkjasdfhmgsdhm</h1>} />
          <Route path="/zona" element={<h1 style={{color: "black"}}>lshdfkjshfsdf dsf sdf dsffkjasdfdsffsdfhmgsdhm</h1>} />
          <Route path="/clientes" element={<h1 style={{color: "black"}}>lshdfkjshfkjasdfhmgsddddfdfdfdfdfdfhm</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
