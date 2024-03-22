import { Component } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent {

  dynName:string = "Abhishek Kumar"

  myMehtod(){
    return "My name is "+this.dynName
  }

  appStatus:boolean = false

  status1:string = "Online"
  status2:string = "Offline"

  enable:boolean = false
}
