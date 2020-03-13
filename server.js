const express = require('express')
const fs = require('fs');
const port = 8000;
var app = express()



app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.get('/:name(bnsf|cn|cp|csx|kcs|up|other)?', function (req, res) {
    let rrname = req.params.name;
    var raw_geojson;
    switch(rrname) {
    case "bnsf":
	raw_geojson = fs.readFileSync('BNSF.geojson'); break;

    case "cn":
	raw_geojson = fs.readFileSync('CanadianNational.geojson'); break;

    case "cp":
	raw_geojson = fs.readFileSync('CanadianPacific.geojson'); break;

    case "csx":
	raw_geojson = fs.readFileSync('CSX.geojson'); break;

    case "kcs":
	raw_geojson = fs.readFileSync('KansasCitySouthern.geojson'); break;

    case "up":
	raw_geojson = fs.readFileSync('UnionPacific.geojson'); break;

    case "other":
	raw_geojson = fs.readFileSync('ShortLines.geojson'); break;



    }
    let parsed_geojson = JSON.parse(raw_geojson)
    res.send(parsed_geojson)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
