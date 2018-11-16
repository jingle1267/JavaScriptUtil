var dateUtil = require('./DateUtil');

console.log(dateUtil.formatHMS(new Date()));
console.log(dateUtil.getDayOfYear(new Date()));
console.log(dateUtil.formatTime(new Date(), '{y}/{m}/{d} {h}:{i}:{s}'));