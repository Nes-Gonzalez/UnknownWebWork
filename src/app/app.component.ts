import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GridsterConfig, GridsterItem, DisplayGrid, CompactType, GridType } from 'angular-gridster2';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  showSideBar: false;

  cars: any[];
  cols: any[];

  pieData: any;

  msgs: Message[] = [];

  @ViewChild('table') table: ElementRef;
  @ViewChild('barChart') barChart: ElementRef;
  @ViewChild('pieChart') pieChart: ElementRef;

  static itemChange(item, itemComponent) {
    // console.log('itemChanged', item, itemComponent);
  }

  static itemResize(item, itemComponent) {
    // console.log('itemResized', item, itemComponent);
  }

  ngOnInit(): void {

    this.options = {
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
      gridType: GridType.Fit,
      compactType: CompactType.CompactUpAndLeft,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      keepFixedHeightInMobile: false,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        enabled: true,
      },
      resizable: {
        enabled: true,
      },
      swap: true,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: true,
      displayGrid: DisplayGrid.None,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: false
    };

    this.dashboard = [
    ];

    this.cols = [
      { field: 'vin', header: 'Vin' },
      { field: 'year', header: 'Year' },
      { field: 'brand', header: 'Brand' },
      { field: 'color', header: 'Color' }
    ];
    this.cars = [
      { vin: 1112236942, year: 2015, brand: 'Honda', color: 'Red' },
      { vin: 1123532422, year: 2014, brand: 'Honda', color: 'Silver' },
      { vin: 1118869322, year: 2016, brand: 'Honda', color: 'White' },
      { vin: 1112347822, year: 2017, brand: 'Honda', color: 'Blue' },

      { vin: 1234786942, year: 2015, brand: 'Ford', color: 'Red' },
      { vin: 1458242762, year: 2014, brand: 'Ford', color: 'Silver' },
      { vin: 1967834322, year: 2016, brand: 'Ford', color: 'White' },
      { vin: 1783768522, year: 2017, brand: 'Ford', color: 'Blue' },
      { vin: 1542458542, year: 2018, brand: 'Ford', color: 'Black' },

      { vin: 2386923442, year: 2015, brand: 'Acura', color: 'Red' },
      { vin: 2342762234, year: 2014, brand: 'Acura', color: 'Silver' },
      { vin: 2336431262, year: 2016, brand: 'Acura', color: 'White' },
      { vin: 2368522236, year: 2017, brand: 'Acura', color: 'Blue' },
      { vin: 2358542267, year: 2018, brand: 'Acura', color: 'Grey' },
      { vin: 2358512367, year: 2012, brand: 'Acura', color: 'Black' }
    ];

    this.pieData = {
      labels: ['Honda', 'Ford', 'Acura'],
      datasets: [
        {
          data: [4, 5, 6],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }


  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }


  addPieChart() {
    this.dashboard.push({ cols: 2, rows: 2, y: 0, x: 1, template: this.pieChart });
    this.msgs = this.msgs.slice();
    this.msgs.push({ severity: 'info', summary: 'Added Pie Chart', detail: 'Added Pie Chart! Hi Jake!' });
  }

  addTable() {
    this.dashboard.push({ cols: 2, rows: 3, y: 0, x: 0, template: this.table });
    this.msgs = this.msgs.slice();
    this.msgs.push({ severity: 'info', summary: 'Added Table', detail: 'Added Pie Chart! Hi Chris!' });
  }

  tileResize(event: any) {
    console.log(event);
  }

}
