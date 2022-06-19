import UserCard from "./userCard";

const DerivacioneCard = ({derivacion}) =>{

  return(
    <div className="card">
    <div className="card-body">
      <h6 className="">Area: {derivacion.area}</h6>
      <p className="card-subtitle mb-2">Barrio: {derivacion.barrio}</p>
      <p className="card-subtitle mb-2 text-muted">Operación: {derivacion.operacion}</p>
      <hr/>
      <h6> Empleado </h6>
      <UserCard user={derivacion.empleado} isCard={false} />    
    </div>
    </div>
  )
}

export default DerivacioneCard;