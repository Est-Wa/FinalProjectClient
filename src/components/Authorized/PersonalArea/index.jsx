import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Calender from './Calender'
import SuccessChart from './SuccessChart'
import Alerts from './alerts'

function Personal() {
  return (
    <Grid container spacing={0}>
      <Grid item xs={6} >
        <Card sx={{ padding: '2%', backgroundColor: '#e6faff' ,margin:'5%',marginLeft:'0'}} >
          <Card sx={{ marginBottom: '2%', padding: '2%', display: 'inline-flex' }}>  עדכונים והתראות</Card><Alerts />
        </Card>
      </Grid>
      <Grid item
        container
        direction="column"
        justifyContent="center"
        display={'flex'}
        xs={6}>
        <Grid item >
          <SuccessChart></SuccessChart>
        </Grid>
        <Grid item >
          <Calender></Calender>
        </Grid>
      </Grid>

    </Grid>)
}

export default Personal