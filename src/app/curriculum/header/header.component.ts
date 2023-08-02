import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'curriculum-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  listLanguage = [
    {
      'code': 'es-EC',
      'language': "Español"
    },
    {
      'code': 'en-US',
      'language': "English"
    }
  ];

  actualLanguage:string = "Español";

  constructor(
    private scroller: ViewportScroller,
    private router: Router
  ) { 
  }
  
  ngOnInit(): void {
    let code = window.location.pathname.split('/')[1] != "" ? window.location.pathname.split('/')[1] : "es-EC";
    let languageSelected = this.listLanguage.find(l => l.code == code) 
    this.actualLanguage = languageSelected != undefined ? languageSelected.language : "es-EC";
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

  cambiarLenguaje(languageIndex: number){
    this.actualLanguage = this.listLanguage[languageIndex].language;
    window.location.href = "../" + this.listLanguage[languageIndex].code;
  }

}
