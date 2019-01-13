import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';
import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

import 'react-day-picker/lib/style.css';

class DaypickerRange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      from: undefined,
      to: undefined,
      diff: undefined,
    };
    this.parseDate = this.parseDate.bind(this);
    this.formatDate = this.formatDate.bind(this);
    this.handleDayFromChange = this.handleDayFromChange.bind(this);
    this.handleDayToChange = this.handleDayToChange.bind(this);

  }
/* eslint class-methods-use-this: ["error", { "exceptMethods": ["formatDate","handleDayChange"] }] */


parseDate = (str, format, locale) => {
  const parsed = dateFnsParse(str, format, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
};

formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

handleDayFromChange(selectedDay) {
  this.setState({ from: selectedDay });
}

handleDayToChange(selectedDay) {
  const FORMAT = 'D.M.YYYY';
  this.setState({ to: selectedDay });
  if (this.state.from !== undefined) {
    const { from } = this.state;
    const to = selectedDay;
    const diff = (to.getMonth() - from.getMonth()) + 1;
    this.props.diffa(diff.toString(), `${dateFnsFormat(to, FORMAT)}`, `${dateFnsFormat(this.state.from, FORMAT)}`);
  }
}
render() {
const FORMAT = 'D.M.YYYY';
  return (
    <div>
      <DayPickerInput
        onDayChange={this.handleDayFromChange}
        formatDate={this.formatDate}
        format={FORMAT}
        parseDate={this.parseDate}
        placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
        dayPickerProps={{
          todayButton: 'Сегодня',
        }}
      />
      <DayPickerInput
        onDayChange={this.handleDayToChange}
        formatDate={this.formatDate}
        format={FORMAT}
        parseDate={this.parseDate}
        placeholder={`${dateFnsFormat(new Date(), FORMAT)}`}
        dayPickerProps={{
          todayButton: 'Сегодня',
        }}
      />
    </div>

  );
}
}

export default DaypickerRange;
