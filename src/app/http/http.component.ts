import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { HttpModel } from './http.model';
import { HttpService } from './http.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit, AfterViewChecked {

  postDataReady = '';
  putDataReady = null;
  deleteDataReady = '';
  errorString = '';
  dataFromServer = [];

  userIdInput = '';
  userTitleInput = '';
  userMessageInput = '';

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}

  ngAfterViewChecked(): void {
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
        },
        (error) => {
          console.log('error on post: ', error);
          this.errorString = error.message;
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

  updateData() {
    const data = new HttpModel();
    data.id = '777';
    data.title = 'First Data via POST';
    data.message = 'Updated via HTTP POST request';

    this.httpService.updateDataInServer(data)
      .subscribe(
        (data$) => {
          this.putDataReady = data$;
        },
        (error) => {
          console.log('error: ', error);
          this.errorString = error;
        }
      );
  }

  deleteData(): void {
    this.httpService.deleteDataFromServer()
    .subscribe(
      (data$) => {
        console.log('error: ', data$);
        this.deleteDataReady = data$;
      },
      (error) => {
        console.log('error: ', error);
        this.errorString = error;
      }
    );
  }

}
