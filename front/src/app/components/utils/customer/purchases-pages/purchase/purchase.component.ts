import { Component, Input, OnInit } from '@angular/core';
import { IPurchase } from 'src/app/interfaces/Ipurchase';
import { PurchaseService } from 'src/app/services/purchasee/purchase.service';


@Component({
  selector: 'purchase',
  templateUrl: './purchase.component.html',
 // templateUrl: './purchasetable.component.html',
  styleUrls: ['./purchase.component.css']
})

export class PurchaseComponent implements OnInit {

  //register purchase service
  constructor(private purchaseService: PurchaseService) { }

  ngOnInit() {
    // verify if this is correct
      // this.IPurchase = this._purchaseService.getAll();

      // //compare to line above
      // this._purchaseService.getAll
      //   .subscribe(data => this.purchase = data);
  }

  // format date delivery date figure out where to put this
  //  {{date | date: 'shortDate'}}


  //should I register purchase service in the app.modules.ts
  // such as: bootstrap: [PurchaseServe],

  @Input() input:IPurchase = {
    purchase_id: 0,
    product: {
      product_id: 0,
      name:'',
      price: 0,
      description: '',
      seller: {
        user_id:0,    //unique id no need to display this
        fname:"",
        lname:"",
        email:""      //don't know if we should display this
      },
      statusid: 0,
      typeid: ""
    },
    address:"",
    purchase: 0,
    delivery: 0,
    statusid: ""
  };

  onSelected(){
    this.purchaseService.purchaseSelected.emit(this.input);

  }


}
