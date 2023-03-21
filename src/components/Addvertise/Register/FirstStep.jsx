import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function FirstStep() {
  return (
    <React.Fragment>
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
            autoComplete="email-address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={7} >
          <TextField
            required
            id="password"
            name="password"
            label="סיסמא"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            required
            id="verifyPassword"
            name="verifyPassword"
            label="אימות סיסמא"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            id="userName"
            name="userName"
            label="שם משתשמש"
            fullWidth
            variant="standard"
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}



