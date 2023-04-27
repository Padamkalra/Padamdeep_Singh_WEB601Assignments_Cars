import { Component, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { AddContentDailogComponent } from '../add-content-dailog/add-content-dailog.component';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.scss']
})
export class ModifyContentComponent {
  newCar: any = {};
  @Output() addCarEvent = new EventEmitter<Content>();

  constructor(public dialog: MatDialog, private MessageService: MessageService){}

  openDailog(){
    const dialogRef = this.dialog.open(AddContentDailogComponent,{
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(newCarFromDailog => {
      if(newCarFromDailog)
      {
        if(newCarFromDailog.title && newCarFromDailog.description && newCarFromDailog.creator){
          this.newCar = newCarFromDailog;
          this.addNewCar();
        } else {
          this.MessageService.add('No content added. Required fields were empty');
        }
      }
    });
  }
  addNewCar(){
    this.addCarEvent.emit(this.newCar);
    this.newCar = {};
  }
}

