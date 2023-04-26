import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { contents } from '../helper-files/ContentDb';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private MessageService: MessageService) { }

  getcars(): Observable<Content[]>{
    const cars = contents;
    this.MessageService.add("Content array loaded!");
    return of(cars);
  }

  getcarById(id: number): Observable<any>{
    const cars = contents.find(content => content.id === id);

    if(cars){
      this.MessageService.add(`Content Item at id: ${id}`);
      return of(cars);
    }
    this.MessageService.add("Invalid Id");
    return of("Invalid Id");
  }
}