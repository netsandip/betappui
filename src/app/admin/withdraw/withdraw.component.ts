import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { PointsService } from '../../service/points.service';
import { ToastsManager } from 'ng2-toastr';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  userid: string;
  Balance: Number;

  constructor(private pointService: PointsService,
              public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vcr);
    }

  ngOnInit() {
  }

  updateBalance() {
      const userDetails = {
        userid: this.userid,
        reqbalance: this.Balance,
        reqtype: 'Withdraw'
      };

      this.pointService.updateBalancePoints(userDetails).subscribe(data => {
                      // console.log(data);
                      if (data.success) {
                          // this.loadDashBoard(data);
                          // console.log(data.token);
                          this.toastr.success('Balance is updated to user', 'Information!');
                          return;
                      } else {
                          this.toastr.error('Failed to update balance to the user', 'Oops!');
                          console.log(data.errormessage);
                          return;
                      }
                  });
  }

}
