import { useState } from "react";
import useGetData from "../utils/dataHook";

const Zonales = () =>{

  const [endpoint, setEndpoint] = useState();
  const data = useGetData(endpoint);
  console.log('data',data)
  return( 
    <div className="container p-3" style={{height: "calc(95vh - 70px)",  overflow: "hidden"}}>
      <div className="row h-100">
        <div className="col-7">
          <div className="col-12 d-flex flex-wrap justify-content-around gap-4">
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('tickets/clientes-atendidos-por-zona')} >Clientes atendidos por zona</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('tickets/empleados-atienden-en-su-barrio')} >Empleados atienden en su barrio</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/find-con-barrios')} >Usuarios con sus poligonos</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('usuarios/clientes-por-zona')} >Clientes por zona</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('barrios/punto')} >En que barrio esta el punto</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('barrios/mas-cercano')} >El barrio mas cercano</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('barrios/barrios-dentro-del-poligono')} >Barrios dentro del poligono</button>
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

export default Zonales ;