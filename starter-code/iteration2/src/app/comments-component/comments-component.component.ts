import { Component } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent  {
  Comment =[
    {
      name : "Boby Tables",
      date: "19/07/2016",
      hour: "19:30",
      commentUser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est commodo, porttitor nunc in, iaculis ligula. Pellentesque euismod imperdiet egestas. Phasellus malesuada cursus rhoncus. Aliquam sit amet orci vitae turpis sagittis elementum. Ut ullamcorper eu nibh eget consequat"
    },
    {
      name : "Ironhack School",
      date: "19/07/2016",
      hour: "20:35",
      commentUser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est commodo, porttitor nunc in, iaculis ligula. Pellentesque euismod imperdiet egestas. Phasellus malesuada cursus rhoncus. Aliquam sit amet orci vitae turpis sagittis elementum. Ut ullamcorper eu nibh eget consequat"
    },
    {
      name : "Boby Tables",
      date: "19/07/2016",
      hour: "19:30",
      commentUser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est commodo, porttitor nunc in, iaculis ligula. Pellentesque euismod imperdiet egestas. Phasellus malesuada cursus rhoncus. Aliquam sit amet orci vitae turpis sagittis elementum. Ut ullamcorper eu nibh eget consequat"
    },
    {
      name : "Ironhack School",
      date: "19/07/2016",
      hour: "20:35",
      commentUser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est commodo, porttitor nunc in, iaculis ligula. Pellentesque euismod imperdiet egestas. Phasellus malesuada cursus rhoncus. Aliquam sit amet orci vitae turpis sagittis elementum. Ut ullamcorper eu nibh eget consequat"
    },
    {
      name : "Boby Tables",
      date: "19/07/2016",
      hour: "19:30",
      commentUser: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id est commodo, porttitor nunc in, iaculis ligula. Pellentesque euismod imperdiet egestas. Phasellus malesuada cursus rhoncus. Aliquam sit amet orci vitae turpis sagittis elementum. Ut ullamcorper eu nibh eget consequat"
    }

  ]

  constructor() { }

  ngOnInit() {
  }

}



