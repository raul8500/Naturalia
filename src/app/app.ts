import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar';
import { HeroComponent } from './components/hero/hero';
import { TabsComponent } from './components/tabs/tabs';
// import { FeaturesComponent } from './components/features/features';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
  imports: [
    RouterModule,
    NavbarComponent,
    HeroComponent,
    TabsComponent,
    // FeaturesComponent,
    FooterComponent
  ],
  standalone: true
})
export class AppComponent {}
