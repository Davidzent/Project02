import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/Iproduct';
import { FoodishService } from '../../../../../services/foodish/foodish.service';
import { ProductService } from '../../../../../services/product/product.service';
/* import { GetImgPipe } from 'src/app/pipes/get-img/get-img.pipe'; */

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  /* constructor() { } */

  /* ngOnInit(): void {
  } */

/* product: IProduct = {
    product_id: 0,
    price: 0,
    description: '',
    seller: {
      user_id:0,   //unique id
      fname:"",
      lname:"",
      email:""   //don't know if we should display this
    },
    name: '',
    statusid: 0,
    typeid: 0
} */

 /*    Product: IProduct = this.product; */

  @Input() input:IProduct = {
    product_id: 0,
    price: 0,
    description: '',
    seller: {
      user_id:0,   //unique id
      fname:"",
      lname:"",
      email:""   //don't know if we should display this
    },
    statusid: "",
    typeid: ""
  };

  ngOnInit() {
    /* this.getProduct(); */
    this.getimgInfo();
    this.getImage();
  }

  image: string;
  category: string = 'burger';
  imgNum: string = '1';
  

  isclicked: boolean = false;

  constructor(private foodishService: FoodishService) { }

  getImage() {
    this.foodishService.getData(`https://foodish-api.herokuapp.com/images/${this.category}/${this.category}${this.imgNum}.jpg`)
      .subscribe(
        imgData => this.image = imgData,
        err => console.log(err)
      );
  }

  /* getProduct()
  {
    this.input= ProductService.getProducts():this.input;
  } */

  getimgInfo() {
      /* console.log(this.product.typeid); */
      console.log(this.input.typeid);
      /* if (this.product.typeid.toLocaleString().toLowerCase == 'lunch'){ */
    if (this.input.typeid.toLowerCase == 'hambur'){
        this.category = 'burger';

    }

    /* if (this.product.typeid.toLocaleString().toLowerCase == 'dinner'){ */
    if (this.input.typeid.toLowerCase == 'pasta'){
      this.category = 'pasta';
  }

  /* if (this.product.typeid.toLocaleString().toLowerCase == 'breakfast'){ */
  if (this.input.typeid.toLowerCase == 'pizza'){
    this.category = 'pizza';
  }

  /* this.imgNum = this.product.product_id.toLocaleString(); */
  this.imgNum = this.input.product_id.toLocaleString();

  }

  clicked() {
    this.isclicked = !this.isclicked;
    console.log(this.isclicked);
  }

}
