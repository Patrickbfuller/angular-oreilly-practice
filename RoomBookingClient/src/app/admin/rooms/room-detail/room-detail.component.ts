import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { Room } from 'src/app/model/Room';

@Component({
  selector: 'app-room-detail',
  templateUrl: './room-detail.component.html',
  styleUrls: ['./room-detail.component.css']
})
export class RoomDetailComponent implements OnInit {


  @Input()
  room: Room;

  constructor(private router : Router,
              private dataService : DataService) { }

  ngOnInit() {
  }

  editRoom() {
    this.router.navigate(
      ['admin', 'rooms'],
      {queryParams : {action: 'edit', id: this.room.id}}
    )
  }

  deleteRoom() {
    this.dataService.deleteRoom(this.room.id).subscribe(
      next => this.router.navigate(['admin', 'rooms'])
    );
  }

}
