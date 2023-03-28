import { AuthContext, AuthContextProvider } from './context/authContext'
import { useContext } from "react";

import AddAppBar from './components/Advertise/AppBar';
import LearnAppBar from './components/Learning/AppBar';
import AddRouts from './components/Advertise/RoutsComponent'
import LearnRouts from './components/Learning/RoutesComponents'


function Routes() {
    const { LogedIn, setLogedIn } = useContext(AuthContext)

    console.log(LogedIn, "LogedIn")
    return (
        <>
        {LogedIn ? <> <LearnAppBar /><LearnRouts /> </>: <> <AddAppBar /><AddRouts /> </>}</>

    );
  }
  
  export default Routes;