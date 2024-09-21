import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  titre : string ="hello";
  color : string="red";
  product ={
    id:1,
    name:"phone",
    price:100,
    quantity:10 ,  
    imagesrc : "/assets/399978928_24089555037357245_4740176351509985372_n.jpg"
  }
  acheter(){
    this.product.quantity--;
  }

  onColorChange(event:Event){
    this.color =(event.target as HTMLInputElement).value;
  }
}
