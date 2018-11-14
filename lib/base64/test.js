var base64 = require('./Base64Util');

var resEncode = base64.encode("hello world");
var resDecode = base64.decode(resEncode);
console.log('resEncode : ' + resEncode);
console.log('resDecode : ' + resDecode);