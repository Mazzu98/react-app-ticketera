import useGetData from "../utils/dataHook";
import UserCard from "../components/userCard"
const Home = () =>{

  const users = useGetData('usuarios');
  console.log(users);
  return( 
    <div className="container" style={{height: "calc(100vh - 70px)",  overflow: "hidden"}}>
      <div className="row" style={{maxWidth: "18rem", height: "100%",  overflowY: "scroll"}}>
        {users && users.map((user) => 
          <UserCard key={user._id} user={user}/>
        )}
      </div>
    </div>
  )
}

export default Home;