import { Component } from '@angular/core';

@Component({
  selector: 'app-class-style',
  templateUrl: './class-style.component.html',
  styleUrls: ['./class-style.component.css']
})
export class ClassStyleComponent {

  mypro:boolean = false

  myStyle1:string = "15px"
  myStyle2:string = "5px"

  isActive:boolean = false

  mltclasses = {
    class1 : true,
    class2 : true,
    class3 : true
  }
  

  mltstyle = {
    'background': 'red',
    'border':'10px solid green'
}


}
