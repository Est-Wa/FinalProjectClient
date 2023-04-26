import { BrowserRouter as Router, Route } from "react-router-dom"
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import purple from '@mui/material/colors/purple';
import { AuthContext, AuthContextProvider } from './context/authContext'
import Routes from './Routes'
// import Background from './images/logoBackground.jpg'

const theme = createTheme({
  palette: {
    primary: { main: '#DB3349' },
  },
});

function App() {
  return (
    <div className="App" 
    // style={{backgroundImage: `url(${Background})`}}
    >
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