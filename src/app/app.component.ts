import { Component, OnInit, ViewChild } from '@angular/core';
import { products } from './products';
import { DataBindingDirective } from '@progress/kendo-angular-grid';
import { process } from '@progress/kendo-data-query';
import { employees } from './employees';
import { images } from './images';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(DataBindingDirective, { static: false }) dataBinding: DataBindingDirective;
  title: string = "Two Kendo Grids Filtering Each Other"
  public gridData: any[] = employees;
  public gridView: any[];

  public mySelection: string[] = [];

  public ngOnInit(): void {
    this.gridView = this.gridData;
  }



  public onFilter(inputValue: string): void {
    console.log("On Filter method got passed =>", inputValue);
    
    let processedDataResult = process(this.gridData, {
      filter: {
        logic: "or",
        filters: [
          {
            field: 'full_name',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'job_title',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'budget',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'phone',
            operator: 'contains',
            value: inputValue
          },
          {
            field: 'address',
            operator: 'contains',
            value: inputValue
          }
        ],
      }
    });
    console.log("Data result from process", processedDataResult)

    this.gridView = processedDataResult.data;
    this.dataBinding.skip = 0;
  }


  private photoURL(dataItem: any): string {
    const code: string = dataItem.img_id + dataItem.gender;
    const image: any = images;

    return image[code];
  }

  private flagURL(dataItem: any): string {
    const code: string = dataItem.country;
    const image: any = images;

    return image[code];
  }
}
