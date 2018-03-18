import { AuthService } from './../service/auth.service';
import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password: string;

  constructor(private authService: AuthService,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  userLogin() {
      const loginUser = {
        userid: this.email,
          password: this.password
      };

      this.authService.validateUser(loginUser).subscribe(data => {
                      // console.log(data);
                      if (data.success) {
                          this.loadDashBoard(data);
                          // console.log(data.token);
                          return;
                      } else {
                          this.toastr.error('Invalid Email ID or Password', 'Oops!');
                          console.log(data.errormessage);
                          return;
                      }
                  });
  }

  loadDashBoard(data) {
    // this.authService.storeUsersData(data.token, data.user, data.user.TagID);
    // this.authService.storeUsersData(data.token, data.userid);
    window.location.href = '../admin/create';
}

}
