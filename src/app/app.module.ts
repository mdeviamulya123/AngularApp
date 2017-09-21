import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { UsernameService } from './username.service';
import { AppComponent } from './app.component';
import { UsernameComponent } from './username.component';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';

import { KeywordService } from './keyword.service';
import { KeywordComponent } from './keyword.component';
import { InfoComponent } from './info.component';





@NgModule({
  declarations: [
    AppComponent,
    UsernameComponent,
    NavbarComponent,
    FooterComponent,
    KeywordComponent,
    InfoComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UsernameService, KeywordService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
