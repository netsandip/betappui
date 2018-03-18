import { UserService } from './../../service/user.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  userid: string;
  Name: String;
  EmailAddress: String;
  Password: String;
  PhoneNumber: Number;
  Balance: Number;
  confirmpassword: String;

  constructor(private userService: UserService,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  createuser() {
      const newUser = {
          userid: this.userid,
          password: this.Password,
          Name: this.Name,
          EmailAddress: this.EmailAddress,
          PhoneNumber: this.PhoneNumber,
          Balance: this.Balance
      };

      this.userService.createUser(newUser).subscribe(data => {
                      // console.log(data);
                      if (data.success) {
                          this.toastr.success('User Created successfully!', 'Information!');
                          // this.loadDashBoard(data);
                          // console.log(data.token);
                          return;
                      } else {
                          this.toastr.error('Create user failed', 'Oops!');
                          console.log(data.errormessage);
                          return;
                      }
                  });
  }

}
