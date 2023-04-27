import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-content-dailog',
  templateUrl: './add-content-dailog.component.html',
  styleUrls: ['./add-content-dailog.component.scss']
})
export class AddContentDailogComponent {
  newCar: any = {};

  constructor(public dialogRef: MatDialogRef<AddContentDailogComponent>){}
  addNewBike(){
    this.newCar = {};
  }
}
