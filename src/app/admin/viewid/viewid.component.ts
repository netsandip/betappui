import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-viewid',
  templateUrl: './viewid.component.html',
  styleUrls: ['./viewid.component.css']
})
export class ViewidComponent implements OnInit {
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
      Name: {
        title: 'Full Name'
      },
      EmailAddress: {
        title: 'Email'
      },
      PhoneNumber: {
        title: 'Phone Number'
      },
      Balance: {
        title: 'Available Balance'
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
    this.userService.GetAllUsers().subscribe(data => {
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
