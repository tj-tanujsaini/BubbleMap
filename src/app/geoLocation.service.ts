import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GeoLocationService {

    targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    ConnectionData = [{
        "id": "Secunderabad",
        "svgPath": this.targetSVG,
        "title": "Secunderabad",
        "latitude": 17.4399,
        "longitude": 78.4983,
        "scale": 1
    },
    {
        "svgPath": this.targetSVG,
        "title": "Chirawa",
        "latitude": 28.2416,
        "longitude": 75.6499,
        "scale": 0.5
    },
    {
        "title": "Bathinda",
        "latitude": 30.2110,
        "longitude": 74.9455,
        "svgPath": this.targetSVG,
        "scale": 0.5
    },
    {
        "title": "Gangtok",
        "latitude": 27.3314,
        "longitude": 88.6138,
        "svgPath": this.targetSVG,
        "scale": 0.5
    },
    {
        "title": "Meerut",
        "latitude": 28.9845,
        "longitude": 77.7064,
        "svgPath": this.targetSVG,
        "scale": 0.5
    },
    {
        "title": "Udhampur",
        "latitude": 32.9160,
        "longitude": 75.1416,
        "svgPath": this.targetSVG,
        "scale": 0.5
    },
    {
        "title": "Jodhpur",
        "latitude": 26.2389,
        "longitude": 73.0243,
        "svgPath": this.targetSVG,
        "scale": 0.5
    },
    {
        "title": "Ranchi",
        "latitude": 23.3441,
        "longitude": 85.3096,
        "svgPath": this.targetSVG,
        "scale": 0.5
    },
    {
        "title": "Pune",
        "latitude": 18.5204,
        "longitude": 73.8567,
        "svgPath": this.targetSVG,
        "scale": 0.5
    },
    ];

    getConnectionDate() {
        return this.ConnectionData;
    }

}