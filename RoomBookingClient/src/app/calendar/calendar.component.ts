import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { Booking } from '../model/Booking';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  bookings : Array<Booking>;
  selectedDate : string;

  constructor(private dataService : DataService,
              private router : Router,
              private route : ActivatedRoute) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe(
      params => {
        this.selectedDate = params['date']
        if (!this.selectedDate) {
          this.selectedDate = formatDate(new Date(), 'yyyy-MM-dd', 'en-US');

        }
        this.dataService.getBookings(this.selectedDate).subscribe(
          next => {
            this.bookings = next
          }
        )
      }
    )

  }

  editBooking(id : number) {
    this.router.navigate(['editBooking'], {queryParams : {id}})
  }

  addBooking() {
    this.router.navigate(['addBooking']);
  }

  deleteBooking(id : number) {
    this.dataService.deleteBooking(id).subscribe
  }

  dateChanged() {
    this.router.navigate([''], {queryParams : { date : this.selectedDate}})
  }

}
