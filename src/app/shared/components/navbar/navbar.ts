import {Component, EventEmitter, inject, Output} from '@angular/core';
import {Theme} from '../../../core/services/theme';
import {Translation} from '../../../core/services/translation';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';
import {UiButton} from '../ui-button/ui-button';

@Component({
  selector: 'app-navbar',
  imports: [
    TranslatePipe,
    RouterLink,
    UiButton
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private themeService = inject(Theme);
  private translationService = inject(Translation);

  @Output() onQuote = new EventEmitter<void>();

  get darkMode() {
    return this.themeService.darkMode;
  }

  toggleTheme() {
    this.themeService.toggle();
  }

  toggleLang() {
    this.translationService.toggle();
  }

  get currentLang() {
    return this.translationService.currentLang;
  }
}
