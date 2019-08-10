import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/service.index';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.css']
})
export class ActivateAccountComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    public _userService: UserService
    ) {
  }

  ngOnInit() {
    this.getTokenParams();
  }
  getTokenParams() {
    this.activatedRoute.params.subscribe(params => {
      this.activateAccount(params.token);
    });
  }
  activateAccount(paramsToken: string) {
    this._userService._activateAccount(paramsToken)
      .subscribe(() => {});
  }

}
