import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from "dayjs";

export default function SecondStep(props) {
    const { setUserFirstName,
        firstName,
        setUserLastName,
        lastName,
        setStudentFirstName,
        sFirstName,
        setStudentLastName,
        sLastName,
        setBirthDate,
        birthDate,
        setGender,
        gender,
        handleNext, handleBack } = props;
    const [error, setError] = React.useState(false)

    const handleSubmit = (event) => {
        console.log('inSubmit')
        event.preventDefault();
        if (!firstName || !lastName || !sFirstName || !sLastName) {
            setError(true);
            return;
        }
        handleNext()
    };
    return (
        <FormControl >
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
                        autoComplete="given-name"
                        variant="standard"
                        onBlur={(e) => setUserFirstName(e.target.value)}
                        defaultValue={firstName}
                        error={error && !firstName}
                        helperText={error && !firstName ? 'Please enter your first name' : ''}
                    />
                </Grid>
                <Grid item xs={7} >
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="שם משפחה"
                        fullWidth
                        autoComplete="family-name"
                        variant="standard"
                        onBlur={(e) => setUserLastName(e.target.value)}
                        defaultValue={lastName}
                        error={error && !lastName}
                        helperText={error && !lastName ? 'Please enter your last name' : ''}
                    />
                </Grid>
                <Grid item xs={7} >
                    <TextField
                        required
                        id="studentFName"
                        name="studentFName"
                        label="שם פרטי תלמיד"
                        fullWidth
                        variant="standard"
                        onBlur={(e) => setStudentFirstName(e.target.value)}
                        defaultValue={sFirstName}
                        error={error && !sFirstName}
                        helperText={error && !sFirstName ? `Please enter the student's first name` : ''}
                    />
                </Grid>
                <Grid item xs={7} >
                    <TextField
                        required
                        id="studentLName"
                        name="studentLName"
                        label="שם משפחה תלמיד"
                        fullWidth
                        variant="standard"
                        onBlur={(e) => setStudentLastName(e.target.value)}
                        defaultValue={sLastName}
                        error={error && !sLastName}
                        helperText={error && !sLastName ? `Please enter the student's last name` : ''}
                    />
                </Grid>

                <Grid item xs={7} >
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DesktopDatePicker defaultValue={dayjs(new Date())} label=" תאריך לידה" autoComplete="bday" />
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
                                autoComplete="sex"
                                onBlur={(e) => setGender(e.target.value)}
                                defaultValue=''
                            >
                                <MenuItem value={10}>זכר</MenuItem>
                                <MenuItem value={20}>נקבה</MenuItem>
                                <MenuItem value={30}>אחר</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
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


        </FormControl >
    );
}



