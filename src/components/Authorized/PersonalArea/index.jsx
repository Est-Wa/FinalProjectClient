import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Calender from './Calender'
import SuccessChart from './SuccessChart'
import Alerts from './alerts'

function Personal() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={6} sx={{padding:'5%'}}>
        <Card sx={{ padding: '2%', backgroundColor: '#FAE4AA' }} >
          <Card sx={{ marginBottom: '2%', padding: '2%', display: 'inline-flex' }}>  עדכונים והתראות</Card><Alerts />
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Grid container direction={'column'}>
          <Grid item >
            <SuccessChart></SuccessChart>
          </Grid>
          <Grid item >
            <Calender></Calender>
          </Grid>
        </Grid>
      </Grid>

    </Grid>)
}

export default Personal