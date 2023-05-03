import { Link } from "react-router-dom"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react'
import axios from 'axios'

async function getVowels() {
  let res = {}
  try {
    res = await axios.get(`http://localhost:3600/api/vowel`)
  }
  catch (err) {
    console.log(err)
  }
  return res.data
}

export default function ThirdStep({ handleNext, vowels, setVowels ,handleBack}) {
  const [currentButtonVariant, setCurrentButtonVariant] = useState('outlined');
  const handleSubmit = () => {
    if (vowels.length < 1)
      alert('you must click something')
    else handleNext()
  }
  const handleButtonVariantChange = (key) => {
    if (vowels.includes(key)) {
      setVowels([...vowels.filter(k => k != key)])
    }
    else {
      setVowels([...vowels, key])
    }
  }


  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await getVowels();
  //     console.log('this is my result' + res.length)
  //     setVowels(res)
  //   }
  //   fetchData()
  // }, [])

  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom>
        עם מה אתה רוצה להתחיל?
      </Typography>
      <Typography variant="h7" gutterBottom>
        יש לסמן את הניקוד הרצוי עבור השיעור הראשון, אחד או יותר
      </Typography>
      <Grid container spacing={10} >
        <Grid item xs={12} sm={1}>
          <Button key={1} style={{ fontSize: 'xx-large' }} variant={vowels.includes(1) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(1)}>א&#1464;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={2} style={{ fontSize: 'xx-large' }} variant={vowels.includes(2) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(2)}>א&#1460;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={3} style={{ fontSize: 'xx-large' }} variant={vowels.includes(3) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(3)}>א&#1461;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={4} style={{ fontSize: 'xx-large' }} variant={vowels.includes(4) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(4)}>א&#1462;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={5} style={{ fontSize: 'xx-large' }} variant={vowels.includes(5) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(5)}>א&#1463;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={6} style={{ fontSize: 'xx-large' }} variant={vowels.includes(6) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(6)}>או&#1465;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={7} style={{ fontSize: 'xx-large' }} variant={vowels.includes(7) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(7)}>א&#1467;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={8} style={{ fontSize: 'xx-large' }} variant={vowels.includes(8) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(8)}>ו&#1468;</Button>
        </Grid>
        <Grid item xs={12} sm={1}>
          <Button key={9} style={{ fontSize: 'xx-large' }} variant={vowels.includes(9) ? 'contained' : 'outlined'} size="large" onClick={() => handleButtonVariantChange(9)}>א&#1456;</Button>
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
          {'הבא'}
        </Button>
      </Box>
    </React.Fragment>
  );
}



