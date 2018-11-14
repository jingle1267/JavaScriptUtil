var array = [1, 3, 2, 4, 9, 0];
var arrayUtil = require('com.ihongqiqu.js.array');
console.log('max :' + arrayUtil.max(array));

console.log("\neach : ");
arrayUtil.each([1, 3, 2], function(res) {
    console.log(res)
})


console.log("\nmap : ");
var map = arrayUtil.map([1, 3, 2], function(res) {
    console.log(res)
}, this);
console.log("map value : " + map.toString());