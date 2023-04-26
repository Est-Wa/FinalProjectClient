import { Link } from "react-router-dom"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react'


export default function ThirdStep() {
  const [currentButtonVariant, setCurrentButtonVariant] = useState('outlined');

  const handleButtonVariantChange = () => {
    if (currentButtonVariant === 'outlined') {
      setCurrentButtonVariant('contained');
    }
    else {
      setCurrentButtonVariant('outlined');
    }
  }
const x= ["\u1467", ]

  //  const vowels = [String.fromCharCode(parseInt('א&#1464;',16)), 'א&#1460;', 'א&#1461;', 'א&#1462;', 'א&#1463;', 'או&#1465;', 'א&#1467;', 'ו&#1468;', 'א&#1467;']
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        עם מה אתה רוצה להתחיל?
      </Typography>
      <Typography variant="h7" gutterBottom>
        יש לסמן את הניקוד הרצוי עבור השיעור הראשון, אחד או יותר
      </Typography>
      <Grid container spacing={10} >
        {/* <>
          {vowels.map((v, i) => {
            if(i in checkedButtons)
              return (
              <Grid item xs={12} sm={1} key={i}>
              <Button style={{ fontSize: 'xx-large' }} variant={'Contained'} size="large" onClick={handleButtonVariantChange}>{v}</Button>
            </Grid>)
            return 
                return (
              <Grid item xs={12} sm={1} key={i}>
              <Button style={{ fontSize: 'xx-large' }} variant={'outlined'} size="large" onClick={handleButtonVariantChange}>{v}</Button>
            </Grid>)
          })}</> */}
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



