import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4geodata_worldIndiaLow from "@amcharts/amcharts4-geodata/indiaLow";

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-amcharts',
  templateUrl: './amcharts.component.html',
  styleUrls: ['./amcharts.component.css']
})

export class AmchartsComponent implements OnInit, AfterViewInit, OnDestroy {

  private chart: am4maps.MapChart;

  dataSet = [];

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    // Create map instance
    let chart = am4core.create("chartdiv", am4maps.MapChart);

    //india map........................
    chart.geodata = am4geodata_worldIndiaLow;

    // Set projection
    chart.projection = new am4maps.projections.Miller();

    // Create map polygon series
    let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon (like country names) data from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    let polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.polygon.fillOpacity = 0.8;

    // Create hover state and set alternative fill color
    let hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(2);

    // Add image series
    let imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.tooltipText = "{title}, {monthsStay} months";

    
    let circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.propertyFields.radius = "monthsStay";
    circle.fillOpacity = 0.3;
    circle.strokeWidth = 1;
    circle.propertyFields.fill = "color";
    circle.propertyFields.stroke = "color";
    
    let circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 3;
    circle2.propertyFields.fill = "color";

    //Label
    let label = imageSeries.mapImages.template.createChild(am4core.Label);
    label.text = "{title}";
    label.fontSize = 12;
    label.opacity = 0.9;
    label.padding(2,2,2,2);

    let colorSet = new am4core.ColorSet();

    imageSeries.data = [
      {
        "title": "Secunderabad",
        "latitude": 17.4399,
        "longitude": 78.4983,
        "color": colorSet.next(),
        "monthsStay": 24
      },
      {
        "title": "Chirawa",
        "latitude": 28.2416,
        "longitude": 75.6499,
        "color": colorSet.next(),
        "monthsStay": 36
      },
      {
        "title": "Bathinda",
        "latitude": 30.2110,
        "longitude": 74.9455,
        "color": colorSet.next(),
        "monthsStay": 36
      },
      {
        "title": "Gangtok",
        "latitude": 27.3314,
        "longitude": 88.6138,
        "color": colorSet.next(),
        "monthsStay": 24
      },
      {
        "title": "Meerut",
        "latitude": 28.9845,
        "longitude": 77.7064,
        "color": colorSet.next(),
        "monthsStay": 36
      },
      {
        "title": "Udhampur",
        "latitude": 32.9160,
        "longitude": 75.1416,
        "color": colorSet.next(),
        "monthsStay": 24
      },
      {
        "title": "Jodhpur",
        "latitude": 26.2389,
        "longitude": 73.0243,
        "color": colorSet.next(),
        "monthsStay": 36
      },
      {
        "title": "Ranchi",
        "latitude": 23.3441,
        "longitude": 85.3096,
        "color": colorSet.next(),
        "monthsStay": 12
      },
      {
        "title": "Pune",
        "latitude": 18.5204,
        "longitude": 73.8567,
        "color": colorSet.next(),
        "monthsStay": 60
      },
    ];

    this.dataSet = imageSeries.data;

  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }

}
