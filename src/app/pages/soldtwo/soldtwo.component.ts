import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/service.index';

@Component({
  selector: 'app-soldtwo',
  templateUrl: './soldtwo.component.html',
  styleUrls: ['./soldtwo.component.css']
})
export class SoldtwoComponent implements OnInit {

  public categories = [];
  public product = {
    name: '',
    description: '',
    categories: [],
    url: '',
    price: 0,
    stock: 0,
    type: 'image',

  };

  constructor(
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    const split = this.router.url.split('/');
    this.product.categories = split[split.length - 1].split(',');
  }

  public createProduct() {

    this.productService.createProduct(this.product)
      .then(res => {

        console.log(res);
      })
      .catch(e => {
        console.log("adasda");
        console.log(e)
      });
  }

  public beforeStep() {
    this.router.navigate([`/sold`]);
  }

  public nextStep() {
    this.router.navigate([`/sold/step3`]);
  }

}
