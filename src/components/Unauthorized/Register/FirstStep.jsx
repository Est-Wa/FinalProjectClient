import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';


export default function FirstStep(props) {
  const { setPassword, setUserName, setEmailAddress, handleNext, userName, emailAddress, password } = props;
  const [error, setError] = React.useState(false)
  const handleSubmit = (event) => {
    console.log('inSubmit')
    event.preventDefault();
    if (!userName || !emailAddress || !password) {
      setError(true);
      return;
    }
    handleNext()
  };
  return (
    <FormControl >
      <Typography variant="h6" gutterBottom>
        רישום למערכת
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={7} >
          <TextField
            required
            id="emailAddress"
            name="emailAddress"
            label="כתובת מייל"
            fullWidth
            autoComplete="email"
            variant="standard"
            onBlur={(e) => setEmailAddress(e.target.value)}
            defaultValue={emailAddress}
            error={error && !emailAddress}
            helperText={error && !emailAddress ? 'Please enter a valid email address' : ''}
          />
        </Grid>
        <Grid item xs={7} >
          <TextField
            required
            id="password"
            name="password"
            label="סיסמא"
            fullWidth
            autoComplete="new-password"
            variant="standard"
            onBlur={(e) => setPassword(e.target.value)}
            defaultValue={password}
            error={error && !password}
            helperText={error && !password ? 'Please enter a password' : ''}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="verifyPassword"
            name="verifyPassword"
            label="אימות סיסמא"
            fullWidth
            variant="standard"
            defaultValue=''
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            required
            id="userName"
            name="userName"
            label="שם משתשמש"
            fullWidth
            autoComplete="username"
            variant="standard"
            onBlur={(e) => setUserName(e.target.value)}
            defaultValue={userName}
            error={error && !userName}
            helperText={error && !userName ? 'Please enter a userName' : ''}
          />
        </Grid>
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>

      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ mt: 3, ml: 1 }}
      >
        {'הבא'}
      </Button>
      </Box>
    </FormControl>
  );
}



