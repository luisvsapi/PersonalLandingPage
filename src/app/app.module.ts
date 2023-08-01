import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './curriculum/header/header.component';
import { HomeComponent } from './curriculum/body/home/home.component';
import { AboutComponent } from './curriculum/body/about/about.component';
import { ServiceComponent } from './curriculum/body/service/service.component';
import { PortafolioComponent } from './curriculum/body/portafolio/portafolio.component';
import { ContactComponent } from './curriculum/body/contact/contact.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { FooterComponent } from './curriculum/footer/footer.component';
import { VitaeComponent } from './curriculum/vitae/vitae.component';
import { ExampleComponent } from './example/example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    VitaeComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PortafolioComponent,
    ContactComponent,
    CurriculumComponent,
    FooterComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
