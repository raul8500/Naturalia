import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero';
import { FeaturesComponent } from '../../components/features/features';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, FeaturesComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  standalone: true
})
export class HomeComponent {
  // La animación se maneja completamente con CSS
}
