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


  constructor(){
    this.contents = [
      {
        id: 0,
        title: "Kawasaki Ninja ZX10R",
        description: "The Kawasaki Ninja ZX-10R is a motorcycle in the Ninja sport bike series from the Japanese manufacturer Kawasaki, the successor to the Ninja ZX-9R. It was originally released in 2004 and has been updated and revised throughout the years. It combines an ultra-narrow chassis, low weight, and radial brakes.",
        creator: "Kawasaki Motorcycle & Engine Company",
        imgURL: "https://content2.kawasaki.com/ContentStorage/CKM/Products/5016/ba433ac4-0669-47e4-a7f4-735c91bb0362.jpg?w=510&h=340&mode=crop",
        type: "Super Sport",
        tags: ["Kawasaki", "Ninja", "Super Sport"]
      },
      {
        id: 1,
        title: "Yamaha YZF R1",
        description: "The Yamaha YZF-R1, or simply R1, is a 1,000 cc-class sports motorcycle made by Yamaha. It was first released in 1998, undergoing significant updates in 2000, 2002, 2004, 2006, 2007, 2009, 2015, 2018 and 2020.",
        creator: "Yamaha Motor Company",
        imgURL: "https://dd5394a0b8ca8e97ba29-abf76f3d91a2125517d6c7c409f095c7.ssl.cf1.rackcdn.com/content/common/Models/2023/4dc57ed5-4a65-4963-a2d6-afd571510f59.png",
        type: "Super Sport"
      },
      {
        id: 2,
        title: "Kawasaki Ninja H2",
        description: "The Kawasaki Ninja H2 is a supercharged supersport-class motorcycle in the Ninja sports bike series manufactured by Kawasaki, featuring a variable-speed centrifugal supercharger.",
        creator: "Kawasaki Motorcycle & Engine Company",
        imgURL: "https://content2.kawasaki.com/ContentStorage/CKM/ProductTrimGroup/31/cbcb96d1-4e57-4563-9ccf-0b3ce735ca38.jpg?w=750",
      },
      {
        id: 3,
        title: "BMW S1000RR",
        description: "BMW S1000RR is a race oriented sport bike initially made by BMW Motorrad to compete in the 2009 Superbike World Championship, that is now in commercial production. It was introduced in Munich in April 2008, and is powered by a 999 cc four-cylinder engine redlined at 14,200 rpm.",
        creator: "BMW Motorrad",
        imgURL: "https://images.unsplash.com/photo-1635073908681-b4dfbd6015e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        type: "Super Sport"
      },
      {
        id: 4,
        title: "Ducati Palingale V4",
        description: "The Palingale V4, aside from having a totally awesome name, is a sport motorcycle produced by Italian manufacturer Ducati. The bike has a displacement of 1,103cc, outputting about 214 horsepower from a Desmosedici Stradale V4 engine.",
        creator: "Ducati",
        imgURL: "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2018/07/Panigale-V4-.jpg?q=50&fit=crop&w=750&dpr=1.5",
        type: "Super Racing Sport"
      },
      {
        id: 5,
        title: "Suzuki Hayabusa",
        description: "The Suzuki GSX1300R Hayabusa is a sports motorcycle made by Suzuki since 1999. It immediately won acclaim as the world's fastest production motorcycle, with a top speed of 303 to 312 km/h.",
        creator: "Suzuki",
        imgURL: "https://www.suzuki.ca/wp-content/uploads/DIA1.jpg",
      },
      {
        id: 6,
        title: "Yamaha MT-10",
        description: "The Yamaha MT-10 is a standard motorcycle made by Japanese motorcycle manufacturer Yamaha in their MT motorcycle series, first sold in 2016. It was introduced at the 2015 EICMA in Milan, Italy. It is the flagship member of the MT range from Yamaha.",
        creator: "Yamaha Motor Company",
        imgURL: "https://cdn-tp3.mozu.com/27878-44719/cms/44719/files/0de49048-2615-4155-aba1-fe0f35108102",
        type: "Naked Super Sport"
      },
      {
        id: 7,
        title: "Kawasaki Z900",
        description: "The Kawasaki Z900 is a standard motorcycle of the Kawasaki Z series made by Kawasaki since 2017. It replaced the Z800.",
        creator: "Kawasaki Motorcycle & Engine Company",
        imgURL: "https://content2.kawasaki.com/ContentStorage/CKM/Products/5291/c89af561-fe2a-4087-87c7-6e9e54b2f7d5.png?w=767",
        type: "Naked Super Sport"
      },
      {
        id: 8,
        title: "Kawasaki Ninja 1000 SX",
        description: "The Kawasaki Ninja 1000 SX is a motorcycle in the Ninja series from the Japanese manufacturer Kawasaki sold since 2011. Other than its name, it is unrelated to the Ninja 1000R produced from 1986-89, or to other Ninja motorcycles.",
        creator: "Kawasaki Motorcycle & Engine Company",
        imgURL: "https://content2.kawasaki.com/ContentStorage/CKM/Products/5100/b0b9b877-688e-48f7-a882-6aefc79ce7ef.jpg?w=510&h=340&mode=crop",
        type: "Touring Sport"
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

}
