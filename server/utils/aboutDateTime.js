import moment from "moment";

export const getDateNoTime = (date) => {
  return moment(date).format("YYYY-MM-DD");
};

// 2021-06-26T17:00:00.000Z
export const getRawDateTime = (date) => {
  const regex = /\T.*/g;
  const temp = date.toISOString().replace(regex, "");
  console.log("temp", temp);
  return new Date(temp);
};

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

export const getDatesBetweenTwoDays = (startDate, stopDate) => {
  var dateArray = new Array();
  var currentDate = startDate;
  while (currentDate <= stopDate) {
    dateArray.push(new Date(currentDate));
    currentDate = currentDate.addDays(1);
  }
  return dateArray;
};
