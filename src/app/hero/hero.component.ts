import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
private heroHeading: string;
private heroText: string;
private heroBtnText : string;
private heroBtnUrl:   string;
  constructor() {
	 this.heroHeading =  "Travel Agency";
	 this.heroText =  "Explore the best way of travel!";
	 this.heroBtnText =  ">> You want some impressions?";
	 this.heroBtnUrl =  "blog" ;
   }

  ngOnInit() {
  }

}
