import { BrowserRouter as Router,  Route } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import purple from '@mui/material/colors/purple';
import { AuthContext, AuthContextProvider } from './context/authContext'
import { useContext } from "react";
import Routes from './Routes'

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
          </Router>
        </ThemeProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;