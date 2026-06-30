import {Component, inject} from '@angular/core';
import {Translation} from '../../../core/services/translation';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-language-banner',
  imports: [
    TranslatePipe
  ],
  templateUrl: './language-banner.html',
  styleUrl: './language-banner.css',
})
export class LanguageBanner {
  private translationService = inject(Translation);

  switchToEnglish() {
    this.translationService.setLang('en');
  }

  switchToSpanish() {
    this.translationService.setLang('es');
  }

  switchToFrench() {
    this.translationService.setLang('fr');
  }
}
