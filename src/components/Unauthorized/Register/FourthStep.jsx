import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react'



export default function FourthStep({ handleBack, handleFinish, level, setLevel }) {

  const [currentButtonVariant, setCurrentButtonVariant] = useState('outlined');
  const handleSubmit = () => {
    handleFinish()
  }
  const handleButtonVariantChange = (key) => {
    if (level.includes(key)) {
      setLevel([...level.filter(k => k != key)])
    }
    else {
      setLevel([...level, key])
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
          <Button key={1} style={{ fontSize: 'xx-large' }} variant={level.includes(1) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(1)}>א&#1460;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={2} style={{ fontSize: 'xx-large' }} variant={level.includes(2) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(2)}>א&#1461;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={3} style={{ fontSize: 'xx-large' }} variant={level.includes(3) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(3)}>א&#1462;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={4} style={{ fontSize: 'xx-large' }} variant={level.includes(4) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(4)}>א&#1463;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={5} style={{ fontSize: 'xx-large' }} variant={level.includes(5) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(5)}>א&#1464;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={6} style={{ fontSize: 'xx-large' }} variant={level.includes(6) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(6)}>או&#1465;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={7} style={{ fontSize: 'xx-large' }} variant={level.includes(7) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(7)}>א&#1467;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={8} style={{ fontSize: 'xx-large' }} variant={level.includes(8) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(8)}>ו&#1468;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={9} style={{ fontSize: 'xx-large' }} variant={level.includes(9) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(9)}>א&#1456;</Button>
        </Grid>

      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
          הקודם
        </Button>
        <Button
          variant="contained"
          onClick={handleSubmit}
          sx={{ mt: 3, ml: 1 }}
        >
          {'סיום'}
        </Button>
      </Box>
    </React.Fragment>
  );
}



