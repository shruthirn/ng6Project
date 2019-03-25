import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs'; //To display the results, we're going to use an Observable, so we're importing it here, too.


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
Users: Object;
  constructor(private data:DataService) { }

  ngOnInit() { //(this runs when the component loads)
    this.data.getUsers().subscribe(
      data => this.Users = data
    )
  }

}
