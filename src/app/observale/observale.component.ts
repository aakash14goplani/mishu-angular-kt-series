import { Component, OnDestroy, OnInit } from '@angular/core';
import { from, interval, of, Subscription, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-observale',
  templateUrl: './observale.component.html',
  styleUrls: ['./observale.component.css']
})
export class ObservableComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor() { }

  ngOnInit(): void {
    const arrayValues = from([1, 2, 3, 4, 5]);

    console.log('arrayValues: ', arrayValues);

    arrayValues
    .pipe(
      tap(value => {
        console.log('tapping value: ', value);
      }),
      map(data => {
        if (data === 3) {
          console.log('returning 3');
          return data;
        }
        if (data === 5 ){
          throw of('Last value...');
        }
        console.log('returning null');
      })
    )
    .subscribe(
      data => {
        if (!!data) {
          console.log(data);
        }
      },
      error => {
        console.log('error thrown: ', error);
      },
      () => {
        console.log('observable completed');
      }
    );

    this.subscription = interval(1000)
      .subscribe(data => {
        console.log('interval data: ', data);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
