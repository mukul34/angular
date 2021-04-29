import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  showPara = false;
  para = [
    {
      data: 'Lorem20 ipsum',
    },
  ];
  userInput: string="";
  log:number=0;
  toggleDisplay() {
    this.showPara = !this.showPara;
    this.log+=1;
  }
  changeInput(value: string) {
    this.userInput = value;
  }
  addData() {
    if (this.userInput != '') {
      this.para.push({ data: this.userInput });
    }
    this.showPara=true;
  }
  displayButtonName(){
    if( this.showPara==false){
      return "Display Details";
    }
    else{
      return "Hide Details";
    }
  }
}
