import * as React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import { styled } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { DayCalendarSkeleton } from '@mui/x-date-pickers/DayCalendarSkeleton';
import { Typography } from '@mui/material';
import { Card } from '@mui/material';


const CustomPickersDay = styled(PickersDay, {
  shouldForwardProp: (prop) =>
    prop !== 'dayOfWeek' && prop !== 'isFirstDay' && prop !== 'isLastDay',
})(({ theme, dayOfWeek, selectedDay, isLastDay }) => ({
  ...( [1,5].includes(dayOfWeek) && {
    borderRadius: 0,
    backgroundColor: 'green',
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
    
  }),
  ...( [30,4].includes(dayOfWeek) && {
    borderRadius: 0,
    backgroundColor: 'red',
    color: theme.palette.common.white,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.primary.dark,
    },
  }),
  
}));

function Day(props) {
  const { day, selectedDay, ...other } = props;
  // if (selectedDay == null) {
  //   return <PickersDay day={day} {...other} />;
  // }
  const dayOfWeek = day.date();
  return (
    <CustomPickersDay
      {...other}
      day={day}
      selectedDay={selectedDay}
      dayOfWeek={dayOfWeek}
    />
  );
}

Day.propTypes = {
  /**
   * The date to show.
   */
  day: PropTypes.object.isRequired,
  selectedDay: PropTypes.object,
};

export default function CustomDay() {
  const [value, setValue] = React.useState(new dayjs());

  return (
            <Card sx={{ padding: '2%', backgroundColor: '#e6faff' ,margin:'5%'}} >

    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Card sx={{ marginBottom: '2%', padding: '2%', display: 'inline-flex' }}>לוח הישגים</Card>
      <DateCalendar
      disableHighlightToday
      disabled
        value={null}
        onChange={(newValue) => setValue(newValue)}
        slots={{ day: Day }}
        // slotProps={{
        //   day: {
        //     selectedDay,
        //   },
        // }}
      />
    </LocalizationProvider>
    </Card>
  );
}
