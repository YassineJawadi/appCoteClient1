import { Component } from '@angular/core';
import {Category} from "../../models/category";

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  titre : string ='';
  categories : Category[]=[
    {"id":1,"title":"Grand électroménager",
      "image":"assets/images/a.jpg", "description":"aaaaaaaaaaaa",
      "available":true},
    {"id":2,"title":"Petit électroménager",
      "image":"assets/images/b.avif", "description":"bbbbbbbbbbb",
      "available":true},
    {"id":3,"title":"Produits informatiques",
      "image":"assets/images/c.jpg", "description":"cccccccccccccc",
      "available":true},
    {"id":4,"title":"Smart Phones", "image":"assets/images/d.jpg",
      "description":"dddddddddddddddd", "available":true},
    {"id":5,"title":"TV, images et son",
      "image":"assets/images/e.jpg", "description":"eeeeeeeeeeeeeeee",
      "available":true},
    {"id":6,"title":"Produits voiture", "image":"assets/images/f.jpg",
      "description":"fffffffffffffff","available":false},
  ]


  showDesc(description: string) {
    alert(description);
  }

}
