import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldIndiaLow from "@amcharts/amcharts4-geodata/indiaLow";
import { GeoLocationService } from 'src/app/geoLocation.service';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-connection-amcharts',
  templateUrl: './connection-amcharts.component.html',
  styleUrls: ['./connection-amcharts.component.css']
})
export class AmchartsConnectionComponent implements OnInit, AfterViewInit {

  constructor(private dataService: GeoLocationService) { }

  ngOnInit() { }

  ngAfterViewInit() {
    
    // Define marker path
    let targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);
    let interfaceColors = new am4core.InterfaceColorSet();

    // Set map definition
    chart.geodata = am4geodata_worldIndiaLow;

    // Set projection
    chart.projection = new am4maps.projections.Mercator();

    // Add zoom control
    chart.zoomControl = new am4maps.ZoomControl();

    // Set initial zoom
    chart.homeZoomLevel = 0.5;
    
    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;
    // polygonSeries.mapPolygons.template.nonScalingStroke = true;

    // Add images
    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
    let imageTemplate = imageSeries.mapImages.template;
    imageTemplate.tooltipText = "{title}";
    imageTemplate.nonScaling = true;

    let colorSet = new am4core.ColorSet();

    // Add Points on Map
    let marker = imageTemplate.createChild(am4core.Sprite);
    marker.path = targetSVG;
    marker.horizontalCenter = "middle";
    marker.verticalCenter = "middle";
    marker.scale = 0.8;
    marker.fill = colorSet.next();

    // get coordinates from service
    imageTemplate.propertyFields.latitude = "latitude";
    imageTemplate.propertyFields.longitude = "longitude";
    imageSeries.data = this.dataService.getConnectionDate();

    // Add lines
    let lineSeries = chart.series.push(new am4maps.MapLineSeries());
    lineSeries.dataFields.multiGeoLine = "multiGeoLine";

    let lineTemplate = lineSeries.mapLines.template;
    lineTemplate.arrow.width = 6;
    lineTemplate.arrow.height = 8;
    lineTemplate.stroke = interfaceColors.getFor("alternativeBackground");
    lineTemplate.fill = interfaceColors.getFor("alternativeBackground");
    lineTemplate.line.strokeOpacity = 0.3;

    //Label
    let label = imageSeries.mapImages.template.createChild(am4core.Label);
    label.text = "{title}";
    label.fontSize = 12;
    label.fillOpacity = 0.8;
    label.padding(3,3,3,3);
    label.background.fill = am4core.color("#eee");


    lineSeries.data = [
      {
        "multiGeoLine": [
          [
            { "latitude": 17.4399, "longitude": 78.4983 },
            { "latitude": 28.2416, "longitude": 75.6499 }
          ]
        ]
      },
      {
        "multiGeoLine": [
          [
            { "latitude": 28.2416, "longitude": 75.6499 },
            { "latitude": 30.2110, "longitude": 74.9455 }
          ]
        ]
      },
      {
        "multiGeoLine": [
          [
            { "latitude": 30.2110, "longitude": 74.9455 },
            { "latitude": 27.3314, "longitude": 88.6138 },
          ]
        ]
      },
      {
        "multiGeoLine": [
          [
            { "latitude": 27.3314, "longitude": 88.6138 },
            { "latitude": 28.9845, "longitude": 77.7064 },
          ]
        ]
      },
      {
        "multiGeoLine": [
          [
            { "latitude": 28.9845, "longitude": 77.7064 },
            { "latitude": 32.9160, "longitude": 75.1416 },
          ]
        ]
      },
      {
        "multiGeoLine": [
          [
            { "latitude": 32.9160, "longitude": 75.1416 },
            { "latitude": 26.2389, "longitude": 73.0243 },
          ]
        ]
      },
      {
        "multiGeoLine": [
          [
            { "latitude": 26.2389, "longitude": 73.0243 },
            { "latitude": 23.3441, "longitude": 85.3096 },
          ]
        ]
      },
      {
        "multiGeoLine": [
          [
            { "latitude": 23.3441, "longitude": 85.3096 },
            { "latitude": 18.5204, "longitude": 73.8567 },
          ]
        ]
      },
    ];

  }

}
