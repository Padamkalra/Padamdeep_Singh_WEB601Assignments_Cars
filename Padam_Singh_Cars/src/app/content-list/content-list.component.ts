import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contents: Content[];
  searchTitle: string = "";
  titleFound: boolean | null = null;
  defaultcar: string ="http://cdn.shopify.com/s/files/1/0017/2179/4609/products/classic-wooden-car-by-avdar-toys-wood-wood-toys-canada-954225.jpg?v=1610496573"


  constructor(){
    this.contents = [
      {
        id: 0,
        title: "Fortuner",
        description: "Black",
        creator: "Creator1",
        imgURL: "https://th.bing.com/th/id/OIP.DeW63hXaGjFJk30UBksDYQHaEK?w=262&h=180&c=7&r=0&o=5&pid=1.7",
        type: "Naked Super Sport",
        tags: ["car 1, car 2"]
      },
      {
        id: 1,
        title: "Range rover",
        description: "White",
        creator: "Creator2",
        imgURL: "https://th.bing.com/th/id/OIP.mHKMtZKGmf_xHp8zk7A9JAHaE7?w=247&h=180&c=7&r=0&o=5&pid=1.7",
        type: "Naked Super Sport"
      },
      {
        id: 2,
        title: "Swift",
        description: "Silver",
        creator: "Creator 3",
        type: "Naked Super Sport"
      },
      {
        id: 3,
        title: "BMW ",
        description: "Black",
        creator: "Creator 4",
        imgURL: "https://th.bing.com/th?id=OIP.skl5oqID86yeY9Vn_9ihkgHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        type: "Super Sport"
      },
      {
        id: 4,
        title: "Sports Car",
        description: "Red",
        creator: "Creator 5",
        imgURL: "https://th.bing.com/th?id=OIP.SfHDOrSjwNwzu0BFGbFAEAHaEo&w=316&h=197&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        type: "Super Sport"
      },
      {
        id: 5,
        title: "Racing car",
        description: "Yellow",
        creator: "Creator 5",
        imgURL: "https://th.bing.com/th?id=OIP.zRo2zCg61WoPAV5bfs05igHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        type: "Super Sport"
      },
      {
        id: 6,
        title: "Desire",
        description: "White",
        creator: "Creator 6",
        imgURL: "https://th.bing.com/th?id=OIP.CHQy-VPAh4E-HT3s9YipOgHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        type: ""
      },
      {
        id: 7,
        title: "Desire",
        description: "White",
        creator: "Creator 7",
        imgURL: "https://th.bing.com/th?id=OIP.CHQy-VPAh4E-HT3s9YipOgHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        type: ""
      },
      {
        id: 8,
        title: "Desire",
        description: "White",
        creator: "Creator 8",
        imgURL: "https://th.bing.com/th?id=OIP.CHQy-VPAh4E-HT3s9YipOgHaE6&w=306&h=203&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
        type: ""
      },
    ]
  }

  handleClick(content: Content){
    console.log(`ID: ${content.id}, Title: ${content.title}`);
  }
  
  searchByTitle(){
    const matchingBike = this.contents.find(bike => bike.title.toLowerCase() === this.searchTitle.toLowerCase());
    const cardElements = document.querySelectorAll(`div.card`);

    if(matchingBike){
      this.titleFound = true;

      cardElements.forEach(card => {
        if(parseInt(card.id) === matchingBike.id){
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
  addNewCar(newCar: Content){
    this.contents.push(newCar);
    this.contents = [...this.contents];
  }

}
