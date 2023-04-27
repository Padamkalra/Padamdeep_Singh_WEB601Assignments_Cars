import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})
export class ContentDetailComponent {
  id: number = 0;
  content: any = {};
  defaultCar: string = '/assets/images/drawcar.jpg';

  constructor(private route:ActivatedRoute, private CarService:CarService){}

  ngOnInit(){
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id') ?? 0);

      this.CarService.getcarById(this.id).subscribe(car => {
        this.content = car;
      })
    });
  }

  handleClick(content: Content){
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }
}