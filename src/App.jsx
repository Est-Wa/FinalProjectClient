import { BrowserRouter as Router,  Route } from "react-router-dom"
import Login from "./components/Addvertise/Login/Login.jsx";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import purple from '@mui/material/colors/purple';
import { AuthContext, AuthContextProvider } from './context/authContex'
import { useContext } from "react";
import Routes from './Routes'
import ActionAreaCard from "./components/Learning/Lesson/Game/Question/FirstStage.jsx";

const theme = createTheme({
  palette: {
    primary: purple,
  },
});



function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <ThemeProvider theme={theme} >
          <CssBaseline />
          <Router>
            <Routes />
            <ActionAreaCard/>
          </Router>
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
