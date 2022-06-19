const PlanCard = ({plan}) =>{

  return(
    <div className="card" style={{width: "18rem"}}>
      <div className="card-body">
        <h5 className="card-title">Plan: {plan.nombre}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Cant canales: {plan.cantCanales}</h6>
        <p className="card-text m-0">Canales: 
            {plan.canales.map((canal)=> canal + ', ')}</p>        
      </div>
    </div>
  )
}

export default PlanCard;