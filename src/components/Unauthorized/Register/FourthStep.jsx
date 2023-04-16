import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react'



export default function FourthStep() {

  const [currentButtonVariant, setCurrentButtonVariant] = useState('outlined');

  const handleButtonVariantChange = () => {
    if (currentButtonVariant === 'outlined') {
      setCurrentButtonVariant('contained');
    }
    else {
      setCurrentButtonVariant('outlined');
    }
  }
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        לא מתחיל מהבסיס?      </Typography>
      <Typography variant="h7" gutterBottom>
        יש לסמן את הניקוד שהתלמיד כבר יודע,
        כדי שנוכל להשתמש בו במהלך השיעורים      </Typography>

      <Grid container spacing={10} >
        <Grid item xs={12} sm={1}>
          <Button style={{ fontSize: 'xx-large' }} variant={currentButtonVariant} size="large" onClick={handleButtonVariantChange}>א&#1464;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button style={{ fontSize: 'xx-large' }} variant={currentButtonVariant} size="large" onClick={handleButtonVariantChange}>א&#1460;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button style={{ fontSize: 'xx-large' }} variant={currentButtonVariant} size="large" onClick={handleButtonVariantChange}>א&#1461;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button style={{ fontSize: 'xx-large' }} variant={currentButtonVariant} size="large" onClick={handleButtonVariantChange}>א&#1462;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button style={{ fontSize: 'xx-large' }} variant={currentButtonVariant} size="large" onClick={handleButtonVariantChange}>א&#1463;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button style={{ fontSize: 'xx-large' }} variant={currentButtonVariant} size="large" onClick={handleButtonVariantChange}>או&#1465;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button style={{ fontSize: 'xx-large' }} variant={currentButtonVariant} size="large" onClick={handleButtonVariantChange}>א&#1467;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button style={{ fontSize: 'xx-large' }} variant={currentButtonVariant} size="large" onClick={handleButtonVariantChange}>ו&#1468;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button style={{ fontSize: 'xx-large' }} variant={currentButtonVariant} size="large" onClick={handleButtonVariantChange}>א&#1456;</Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}



