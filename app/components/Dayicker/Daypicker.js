import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';


import 'react-day-picker/lib/style.css';

const Daypicker = (props) => {
  const FORMAT = 'D.M.YYYY';
  function parseDate(str, format, locale) {
    const parsed = dateFnsParse(str, format, { locale });
    if (DateUtils.isDate(parsed)) {
      return parsed;
    }
    return undefined;
  }

  function formatDate(date, format, locale) {
    return dateFnsFormat(date, format, { locale });
  }
  function handleDayChange(selectedDay) {
    props.da(selectedDay.toLocaleDateString());
  }

  return (
    <DayPickerInput
      onDayChange={handleDayChange}
      formatDate={formatDate}
      format={FORMAT}
      parseDate={parseDate}
      placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
      dayPickerProps={{
        todayButton: 'Today',

      }}
    />
  );
};

export default Daypicker;
