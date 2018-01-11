var fs = require('../lib/filesystem');

var path = fs.pathExists(__dirname);
var file = fs.fileExists('index.js',__dirname+'/..');


