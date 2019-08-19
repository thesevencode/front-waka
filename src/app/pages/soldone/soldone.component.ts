import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProducerService } from '../../services/pages/producer.service';

@Component({
  selector: 'app-soldone',
  templateUrl: './soldone.component.html',
  styleUrls: ['./soldone.component.css']
})
export class SoldoneComponent implements OnInit {

  allCategories = [];
  selectedCategories = [];
  goNextStep = false;
  constructor(
    private router : Router,
    private producerService : ProducerService
  ) { }

  ngOnInit() {
    this.getAllCategories();
  }

  public nextStep() {
    console.log("selected;",this.selectedCategories.length);
    if(this.selectedCategories.length > 0){
      this.router.navigate([`/sold/step2/${this.selectedCategories}`]);
    }else{
      console.log("selecciona una categoria perra !!!");
    }
    
  }

  selectCategorie (value) {
    let found = this.selectedCategories.indexOf(value);
    console.log("asdasjkldamsd",found);
    if(found < 0){
      this.selectedCategories.push(value);
    }else if(found > 0 || found == 0){
      this.selectedCategories.splice(found, 1);
    }
    console.log("los datos...",this.selectedCategories);
    // return value;
  }

  getAllCategories () {
    this.producerService.getAllCategories().subscribe(data => {
      console.log("asdasdasd",data.item);
      this.allCategories = data.item;
    })
  }



}
