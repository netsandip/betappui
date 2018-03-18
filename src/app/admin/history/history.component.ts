import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  data = [];
  settings = {
    columns: {
      _id: {
        title: 'ID'
      }
      ,
      userid: {
        title: 'User ID'
      },
      Balance: {
        title: 'Available Balance'
      },
      Balance_Type: {
        title: 'Operation Type'
      },
      Created_date: {
        title: 'Created Date'
      }
    },
    pager: {
      display: true,
      perPage: 10
    }
  };

  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.userService.GetUsersHistory().subscribe(data => {
      // console.log(data);
      if (data.success) {
          this.data = data.data;
          return;
      } else {

          console.log(data.errormessage);
          return;
      }
  });
  }
}
