const fs = require('fs');

var data = fs.readFileSync('TagCategories.lst', err => console.log(err));
var lines = data.toString().split("\r\n");
var json = {};
lines.forEach(line => {
    var column = line.split("\t");
    var category = column[0];
    var name = column[1];
    var desc = column[2];
    if (!json[category]) {
        json[category] = {};
    }
    if (!json[category][name]) {
        json[category][name] = desc;
    }
});
fs.writeFileSync('TagCategories.json', JSON.stringify(json), 'utf8', err => console.log(err));
