import { useState } from "react";
import useGetData from "../utils/dataHook";

const Clientes = () =>{

  const [endpoint, setEndpoint] = useState();
  const data = useGetData(endpoint);
  console.log('data',data)
  return( 
    <div className="container p-3" style={{height: "calc(95vh - 70px)",  overflow: "hidden"}}>
      <div className="row h-100">
        <div className="col-7">
          <div className="col-12 d-flex flex-wrap justify-content-around gap-4">
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/text/mazzucchelli')} >busca por indice</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/clientes')} >Clientes</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/clientes2')} >Clientes 2</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('tickets/clientes-con-tickets-sin-resolver')} >Clientes con tickets sin resolver</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('tickets/cant-tickets-por-cliente')} >Cant tickets por cliente</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('tickets/cliente-empleado-genero-ticket')} >Es cliente, empleado y genero ticket</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/mas-de-x-canales/5')} >clientes con mas de 5 canales</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/menos-igual-de-x-canales/10')} >clientes con menos de 10 canales</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/clientes-con-canales')} >clientes con canales 4 5 20</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/clientes-por-dnis-apellidos')} >clientes por dnis y apellidos</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/clientes-exepto-apellidos')} >clientes que no tengan los apellidos</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/clientes-sin-pack/SuperPackFull')} >clientes sin SuperPackFull</button>
            </div>
          </div>
        </div>

        <div className="col-5 h-100">
          {data && <h3>{data.length} resultado/s</h3>}
            <div className="row h-100" style={{overflowY: "scroll"}}>
              {<div><pre>{JSON.stringify(data, null, 2) }</pre></div>}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Clientes ;