import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-soldthree',
  templateUrl: './soldthree.component.html',
  styleUrls: ['./soldthree.component.css']
})
export class SoldthreeComponent implements OnInit {

  constructor(
    private router : Router,
  ) { }

  ngOnInit() {
  }

  public beforeStep(){
    this.router.navigate([`/sold/step2/:blannk`]);
  }

}
