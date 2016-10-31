var moment = require("moment");

console.log('Moment Basic');
console.log(moment().format());

console.log('*******************');

var now = moment();
// 2016-10-30T19:27:27+00:00
console.log('current timeStamp: ', now.unix());

console.log('*******************');

var timeStamp = 1477855647;
var currentMoment = moment.unix(timeStamp);
console.log('current moment: ', currentMoment.format('MMM D, YY @ h:mm a'));

console.log('*******************');
console.log('current moment:', currentMoment.format('MMMM Do, YYYY @ h:mm A'));