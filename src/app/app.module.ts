import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { GithubComponent } from "./components/github/github.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from './components/footer/footer.component';
import { LandingComponent } from './components/landing/landing.component';
import { HightlightDirective } from './highlight.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent, 
    GithubComponent, 
    NavbarComponent, 
    FooterComponent, 
    LandingComponent, 
    HightlightDirective, 
    NotFoundComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule
  ],
  providers: [],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}