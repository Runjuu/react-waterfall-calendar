'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INIT_CALENDAR = exports.INIT_CALENDAR = 'INIT_CALENDAR';
var TO_CURRENT_MONTH = exports.TO_CURRENT_MONTH = 'TO_CURRENT_MONTH';
var TO_NEXT_MONTH = exports.TO_NEXT_MONTH = 'TO_NEXT_MONTH';
var TO_LAST_MONTH = exports.TO_LAST_MONTH = 'TO_LAST_MONTH';
var SET_SELECTED = exports.SET_SELECTED = 'SET_SELECTED';
var INIT_DATE_EVENTS = exports.INIT_DATE_EVENTS = 'INIT_DATE_EVENTS';

var initCalendar = exports.initCalendar = function initCalendar(style, event) {
  return {
    type: INIT_CALENDAR,
    style: style,
    event: event
  };
};

var initDateEvents = exports.initDateEvents = function initDateEvents() {
  var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return {
    type: INIT_DATE_EVENTS,
    events: events
  };
};

var setSelected = exports.setSelected = function setSelected(_ref) {
  var date = _ref.date,
      multipleSelect = _ref.multipleSelect;
  return {
    type: SET_SELECTED,
    date: date,
    multipleSelect: multipleSelect
  };
};