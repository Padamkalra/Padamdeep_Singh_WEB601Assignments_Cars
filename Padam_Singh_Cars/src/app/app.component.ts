import { Component } from '@angular/core';
import { CarService } from './services/car.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Padam_Singh_Cars';
  carId:number = 2;
  oneCar: any = {};

  constructor(private CarService: CarService){}

  ngOnInit(){
    this.findCarById();
  }

  findCarById(){
    this.CarService.getcarById(this.carId).subscribe(result => {
      if (typeof result === "object"){
        this.oneCar = result;
      }
    });
  }
}
