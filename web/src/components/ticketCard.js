import DerivacioneCard from "./derivacioneCard";
import UserCard from "./userCard";

const TicketCard = ({ticket}) =>{

  return(
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Operacion: {ticket.operacion}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Descripcion: {ticket.descripcion}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{ticket.resuelto ? "Resuelto" : "Sin resolver"}</h6>
        <p className="card-text m-0">Creado: {ticket.creadoA}</p>
        <hr/>
        <h6 className="card-subtitle" >Cliente</h6>
        <UserCard user={ticket.cliente} />
        <hr/>
        <h6 >Derivaciones</h6>
        <div className="d-flex flex-column gap-3">
          {ticket.derivaciones.map((derivacion, index)=>{
            return(
                <DerivacioneCard key={index} derivacion={derivacion} /> 
                )  
          })}
        </div>
      </div>
    </div>
  )
}

export default TicketCard;