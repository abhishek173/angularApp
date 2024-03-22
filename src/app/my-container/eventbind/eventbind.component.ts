import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbind',
  templateUrl: './eventbind.component.html',
  styleUrls: ['./eventbind.component.css']
})
export class EventbindComponent {

  message:string = ""
  onAddCart(){
    this.message = "Product has been added to Cart"
  }

  onInputClick(event:any){
      console.log(event.target.value);
  }

  onBtnClick(event:any){
    this.message = event.target.value + " Added in Cart.";
  }

}
