import { HistoryComponent } from './admin/history/history.component';
import { MatchesComponent } from './matches/matches.component';
import { WithdrawComponent } from './admin/withdraw/withdraw.component';
import { ViewidComponent } from './admin/viewid/viewid.component';
import { DepositeComponent } from './admin/deposite/deposite.component';
import { CreateComponent } from './admin/create/create.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: 'login',             component: LoginComponent },
    { path: 'admin/create',             component: CreateComponent },
    { path: 'admin/deposite',             component: DepositeComponent },
    { path: 'admin/viewid',             component: ViewidComponent },
    { path: 'admin/history',             component: HistoryComponent },
    { path: 'admin/withdraw',             component: WithdrawComponent },
    { path: 'matches/all',             component: MatchesComponent },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
