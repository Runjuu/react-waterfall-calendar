export const INIT_CALENDAR = 'INIT_CALENDAR';
export const TO_CURRENT_MONTH = 'TO_CURRENT_MONTH';
export const TO_NEXT_MONTH = 'TO_NEXT_MONTH';
export const TO_LAST_MONTH = 'TO_LAST_MONTH';
export const SET_SELECTED = 'SET_SELECTED';
export const INIT_DATE_EVENTS = 'INIT_DATE_EVENTS';

export const initCalendar = (style, event) => ({
  type: INIT_CALENDAR,
  style,
  event,
});

export const initDateEvents = (events = []) => ({
  type: INIT_DATE_EVENTS,
  events,
});

export const setSelected = ({ date, multipleSelect }) => ({
  type: SET_SELECTED,
  date,
  multipleSelect,
});
