import { useState } from "react";
import useGetData from "../utils/dataHook";

const Control = () =>{

  const [endpoint, setEndpoint] = useState();
  const data = useGetData(endpoint);
  console.log('data',data)
  return( 
    <div className="container p-3" style={{height: "calc(95vh - 70px)",  overflow: "hidden"}}>
      <div className="row h-100">
        <div className="col-7">
          <div className="col-12 d-flex flex-wrap justify-content-around gap-4">
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('tickets/unsolved')} >Tickets no resueltos</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('tickets/atencion-al-cliente')} >Atencion al cliente</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('tickets/cant-atenciones')} >Atenciones por empleado</button>
            </div>
            <div className="col-4 d-flex justify-content-center">
              <button className="btn btn-primary" onClick={() => setEndpoint('tickets/cant-derivaciones/2')} >Tickets con 2 derivaciones</button>
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

export default Control ;