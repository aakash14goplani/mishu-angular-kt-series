import { Component, OnInit } from '@angular/core';
import { HttpModel } from './http.model';
import { HttpService } from './http.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  postDataReady = '';
  dataFromServer = [];

  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }

  postData(): void {
    const data = new HttpModel();
    data.id = '456';
    data.title = 'First Data via POST';
    data.message = 'Updated via HTTP POST request';

    this.httpService.postDataToServer(data)
      .subscribe(
        (data$) => {
          this.postDataReady = data$.name;
        }
      );
  }

  getData(): void {
    this.httpService.getDataFromServer()
    .pipe(
      take(1)
    )
    .subscribe(
      (data) => {
        if (!!data) {
          Object.entries(data).forEach(element => {
            this.dataFromServer.push(element[1]);
          });
        }
      }
    );
  }

}
