import { Component, OnInit } from '@angular/core';

import { DashboardService } from '../../services/pages/dashboard.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Products } from '../../models/products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  paramsId ;
  constructor(
    private activeRoute: ActivatedRoute,
    private dashboardService : DashboardService,
    ) { 
    this.paramsId = this.activeRoute.snapshot.params.id;
  }

  // getOneProduct

  ngOnInit() {
    
    this.getOneProduct();
    // console.log("el id ", id);
  }

  getOneProduct(){
    this.dashboardService.getOneProduct(this.paramsId).subscribe(data => {
      console.log("los datos que estamos devolviendo",data);
    })
  }

}
