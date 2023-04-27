import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CarService } from'../services/car.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[] = [];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultcar: string = '/assets/images/car.jpg';

  constructor(private CarService: CarService){
    
  }

  ngOnInit(){
    this.CarService.getcars().subscribe((cars: Content[]) => this.contents = cars );
  }

  addNewCar(NewCar: any){
    this.CarService.addCar(NewCar).subscribe(newcarFromServer => {
      this.contents.push(newcarFromServer);
      this.contents = [...this.contents];
    });
  }
  
  
  searchByTitle(){
    const matchingcar = this.contents.find(car => car.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`div.card`);

    if(matchingcar){
      this.titleFound = true;

      cardElements.forEach(card => {
        if(parseInt(card.id) === matchingcar.id){
          card.classList.add('matched');
        } else {
          card.classList.remove('matched');
        }
      });
    } else {
      this.titleFound = false;
      cardElements.forEach(card => card.classList.remove('matched'));
    }
  }
}