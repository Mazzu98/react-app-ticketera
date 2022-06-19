import useGetData from "../utils/dataHook";
import UserCard from "../components/userCard"
import PlanCard from "../components/planCard"
import TicketCard from "../components/ticketCard"

const Home = () =>{

  const users = useGetData('usuarios');
  const tickets = useGetData('tickets');
  const planes = useGetData('planes');

  console.log(tickets);

  return( 
    <div className="container" style={{height: "calc(95vh - 70px)",  overflow: "hidden"}}>
      <div className="row justify-content-around gap-4" style={{height: "100%"}}>
        <div className="col-3 d-flex flex-column gap-3"  style={{height: "100%",  overflowY: "auto"}}>
          {users && users.map((user) => 
            <UserCard key={user._id} user={user}/>
          )}
        </div>
        <div className="col-3 d-flex flex-column gap-3"  style={{height: "100%",  overflowY: "auto"}}>
          {tickets && tickets.map((ticket) => 
            <TicketCard key={ticket._id} ticket={ticket}/>
          )}
        </div>

        <div className="col-3 d-flex flex-column gap-3"  style={{height: "100%",  overflowY: "auto"}}>
          {planes && planes.map((plan) => 
            <PlanCard key={plan._id} plan={plan}/>
          )}
        </div>

      </div>
    </div>
  )
}

export default Home;