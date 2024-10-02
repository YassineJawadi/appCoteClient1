import { Component } from '@angular/core';
import {Product} from "../../models/Product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  prix : number = 0;
  listProducts : Product[]=[
    {"id":1,
      "name":"Refrigérateur LG Inox","image":"assets/products/1.jpg","categoryId":1,
      "description":"","price":2800,"brand":"LG","promotion":0,"nb_likes":0},
    {"id":2,
      "name":"Refrigérateur Samsung Blanc","image":"assets/products/2.webp","categoryId":1,
      "description":"", "price":2400,"brand":"Samsung","promotion":0,"nb_likes":0},
    {"id":3,
      "name":"Lave vaisselle Beko", "image":"assets/products/3.jpg", "categoryId":1,
      "description":"","price":1875,"brand":"BEKO", "promotion":0,"nb_likes":0},
    {"id":4,
      "name":"Oppo Smart Phone","image":"assets/products/4.webp","categoryId":4,
      "description":"", "price":1200,"brand":"OPPO","promotion":0,"nb_likes":0},
    {"id":5,
      "name":"Hachoir", "image":"assets/products/5.jpg","categoryId":2,
      "description":"","price":120,"brand":"Moulinex", "promotion":0,"nb_likes":0},
    {"id":6,
      "name":"TV 50'' LG","image":"assets/products/6.jpg","categoryId":5,
      "description":"", "price":1800,"brand":"LG","promotion":0,"nb_likes":0},
  ]

    like(product: Product) {
        product.nb_likes ++;
    }
}
