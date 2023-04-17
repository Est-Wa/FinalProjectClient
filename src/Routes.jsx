import { AuthContext} from './context/authContext'
import { useContext } from "react";

import UnauthAppBar from './components/Unauthorized/AppBar';
import AuthAppBar from './components/Authorized/AppBar';
import UnauthRouts from './components/Unauthorized/RoutsComponent'
import AuthRouts from './components/Authorized/RoutesComponents'


function Routes() {
    const { LogedIn, setLogedIn } = useContext(AuthContext)

    console.log(LogedIn, "LogedIn")
    return (
        <>
        {LogedIn ? <> <AuthAppBar /><AuthRouts /> </>: <> <UnauthAppBar /><UnauthRouts /> </>}</>

    );
  }
  
  export default Routes;