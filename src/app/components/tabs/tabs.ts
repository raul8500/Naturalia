import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tabs',
  imports: [CommonModule],
  templateUrl: './tabs.html',
  styleUrl: './tabs.scss',
  standalone: true
})
export class TabsComponent {
  activeTab = 'inicio';

  tabs = [
    { id: 'inicio', label: '🏠 Inicio', icon: '🏠' },
    { id: 'animales', label: '🦁 Animales', icon: '🦁' },
    { id: 'actividades', label: '🎯 Actividades', icon: '🎯' },
    { id: 'contacto', label: '📞 Contacto', icon: '📞' }
  ];

  setActiveTab(tabId: string) {
    this.activeTab = tabId;
  }
}
