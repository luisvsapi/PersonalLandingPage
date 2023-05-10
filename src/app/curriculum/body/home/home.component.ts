import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'curriculum-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  myScriptElement!: HTMLScriptElement;

  constructor() { }

  ngOnInit(): void {
    // Lo llamo aqui porque en este punto ya existe el div que quiero que contenga las particulas
    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "assets/scripts/app.js";
    document.body.appendChild(this.myScriptElement);
  }

}
