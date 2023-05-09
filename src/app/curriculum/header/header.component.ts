import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'curriculum-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private scroller: ViewportScroller) { 
  }

  ngOnInit(): void {
    
  }

  moverHaciaSeccion(event:Event, numeroSeccion:number) {
    event.preventDefault();
    this.scroller.setOffset([0, 70]);
    switch(numeroSeccion){
      case 1:
        this.scroller.scrollToAnchor("curriculum-home");
        break;
      case 2:
        this.scroller.scrollToAnchor("curriculum-about");
        break;
      case 3:
        this.scroller.scrollToAnchor("curriculum-service");
        break;
      case 4:
        this.scroller.scrollToAnchor("curriculum-portafolio");
        break;
      case 5:
        this.scroller.scrollToAnchor("curriculum-contact");
        break;
    }
  }

}
