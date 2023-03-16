import { Link } from "react-router-dom"
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';


import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";

export default function SecondStep() {
    const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                פרטים אישיים
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={7} >
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="שם פרטי"
                        fullWidth
                        autoComplete="first-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={7} >
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="שם משפחה"
                        fullWidth
                        autoComplete="last-name"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={7} >
                    <TextField
                        required
                        id="phoneNumber"
                        name="phoneNumber"
                        label="פלאפון"
                        fullWidth
                        autoComplete="phone-number"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={7} >
                    <TextField
                        required
                        id="studentFName"
                        name="studentFName"
                        label="שם פרטי תלמיד"
                        fullWidth
                        autoComplete="email-address"
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={7} >
                    <TextField
                        required
                        id="studentLName"
                        name="studentLName"
                        label="שם משפחה תלמיד"
                        fullWidth
                        autoComplete="email-address"
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={7} >
                    <LocalizationProvider dateAdapter={AdapterDayjs}  >

                        <DesktopDatePicker defaultValue={dayjs(new Date())} label=" תאריך לידה" />
                    </LocalizationProvider >
                </Grid>
                <Grid item xs={5} >
                <InputLabel id="demo-simple-select-label"></InputLabel>
                <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">מגדר</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="מגדר"
        >
          <MenuItem value={10}>זכר</MenuItem>
          <MenuItem value={20}>נקבה</MenuItem>
          <MenuItem value={30}>אחר</MenuItem>
        </Select>
      </FormControl>
    </Box>
                </Grid>
            </Grid>

        </React.Fragment>
    );
}



