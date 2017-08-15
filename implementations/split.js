var fs = require('fs')
var results = [];
  var rl = require('readline').createInterface({
    input: require('fs').createReadStream('/home/bigdoods/projects/ifc-tech.org/implementations/dataserver.txt')
  });


  // for every new line, if it matches the regex, add it to an array
  // this is ugly regex :)
  rl.on('line', function (line) {
    var re = /\.icon-icon.*:/;
    var match;
    if ((match = re.exec(line)) !== null) {
      results.push(match[0].replace(".",'').replace(":",''));
    }
  });


  // readline emits a close event when the file is read.
  rl.on('close', function(){
    var outputFilename = '/home/bigdoods/projects/ifc-tech.org/implementations/dataserverJSON.txt';
    fs.writeFile(outputFilename, JSON.stringify(results, null, 2), function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log("JSON saved to " + outputFilename);
        }
    });
  });