import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent {
  myContentList : ContentList = new ContentList();

  contentItem1 : Content = {
    id: 0,
    title: 'abc',
    description: 'nvhjvfjhSB',
    creator: 'dxggf'
  }
  contentItem2 : Content = {
    id: 0,
    title: 'sdf',
    description: 'bvhjsbdug',
    creator: 'xfxcv'
  }
  contentItem3 : Content = {
    id: 0,
    title: 'fgh',
    description: 'dbjdskfhi',
    creator: 'Creator3'
  }
  constructor(){
    this.myContentList.addFunction(this.contentItem1);
    this.myContentList.addFunction(this.contentItem2);
    this.myContentList.addFunction(this.contentItem3);
  }

  displayMyIndex(index : number) {
    let myItems = this.myContentList.getItems();

    if (myItems.length > 0 && index > 0 && index < myItems.length){
      return this.myContentList.printIndex(index);
    }
  }
}
