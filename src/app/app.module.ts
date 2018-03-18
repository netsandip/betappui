import { PointsService } from './service/points.service';
import { UserService } from './service/user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './app.routing';
import { RouterModule } from '@angular/router';
import { AuthService } from './service/auth.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'ng2-toastr';
import { CreateComponent } from './admin/create/create.component';
import { DepositeComponent } from './admin/deposite/deposite.component';
import { ViewidComponent } from './admin/viewid/viewid.component';
import { WithdrawComponent } from './admin/withdraw/withdraw.component';
import { MatchesComponent } from './matches/matches.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HistoryComponent } from './admin/history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateComponent,
    DepositeComponent,
    ViewidComponent,
    WithdrawComponent,
    MatchesComponent,
    HistoryComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    HttpModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule,
    HttpClientModule,
    ToastModule.forRoot()
  ],
  providers: [ AuthService, UserService, PointsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
