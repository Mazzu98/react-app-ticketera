const UserCard = ({user, isCard = true}) =>{

  return(
    <div className={isCard && "card"}>
      <div className={isCard && "card-body"}>
        <h5 className="card-title">{user.nombre + " " + user.apellido}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.dni} {user.cliente && "cliente"} {user.empleado && "empleado"}</h6>
        {user.barrio && <p className="card-text m-0">Barrio: {user.barrio}</p>}
        {user.plan && 
          <>
            <p className="card-text m-0">Plan: {user.plan.nombre}</p>
            <p className="card-text m-0">Canales ({user.plan.cantCanales}):  
            {user.plan.canales.map((canal)=> canal + ', ')}</p>
          </>
        }
      </div>
    </div>
  )
}

export default UserCard;