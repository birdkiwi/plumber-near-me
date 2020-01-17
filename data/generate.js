'use strict';
const fs = require('fs');
const randomPointsOnPolygon = require('random-points-on-polygon');
const turf = require('turf');

let newData = {};
let rawData = require('./data.json');
let persons = [];

rawData.plumbers.forEach(function (plumber) {
    const coordinates = plumber.coordinates;
    if (plumber.coordinates) {
        const polygon = {
            type: "Feature",
            properties: {},
            geometry: {
                type: "Polygon",
                coordinates: [coordinates]
            }
        };

        const points = randomPointsOnPolygon(1, polygon);
        plumber.position = points[0].geometry.coordinates;
        delete plumber.coordinates;
        console.log(plumber);
    }

    persons.push(plumber);
});

newData.plumbers = persons;

fs.writeFileSync('index.json', JSON.stringify(newData));
