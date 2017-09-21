import { Component } from '@angular/core';

import { Http } from '@angular/http';
import { UsernameService } from './username.service';
import { NavbarComponent } from './navbar.component';
import { FooterComponent } from './footer.component';
import { KeywordService } from './keyword.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github';
}


