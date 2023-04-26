import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Stepper from '@mui/material/Stepper';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { useContext } from "react";
import { AuthContext } from '../../../context/authContext'
import { useNavigate } from "react-router-dom";




const steps = [' רישום למערכת', 'פרטים אישיים', 'בחירת ניקוד', 'עדכון רמה'];





export default function Login() {
    const navigate = useNavigate();



    const { LogedIn, setLogedIn,login } = useContext(AuthContext)

    const [open, setOpen] = React.useState(false);
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const submit = async () => {
        handleClose();
        setLogedIn(true);
        navigate()
        await login(username, password)
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        boxShadow: 24,
        backgroundColor: 'white',
        padding: '2%'
      }
 
    return (
        
        <>
            <Button id='lgnBtn'  variant="contained" style={{margin:'10px',color:'#DB3349' , backgroundColor:'white'}} onClick={handleOpen}>כניסה</Button>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            ><Box sx={style}>
                    <Typography component="h1" variant="h4" align="center">
                        רישום
                    </Typography>
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >

                        <Box component="form" onSubmit={submit} noValidate sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="userName"
                                label="Email Address"
                                name="userName"
                                autoComplete="username"
                                defaultValue=''
                                onBlur={(e)=>setUsername(e.target.value)}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                defaultValue=''
                                onBlur={(e)=>setPassword(e.target.value)}
                            />
                        

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                        Forgot password?
                                </Grid>
                                <Grid item>
                                        {"Don't have an account? Sign Up"}
                                    
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Box>
            </Modal>
        </>
    );
}
