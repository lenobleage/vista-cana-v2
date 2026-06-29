import {inject, Service} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Service()
export class Translation {
  private translate = inject(TranslateService);

  get currentLang() {
    return this.translate.currentLang;
  }

  setLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('language', lang);
  }

  toggle() {
    const next = this.currentLang() === 'fr' ? 'en' : 'fr';
    this.setLang(next);
  }

  // Initialisation
  init(defaultLang: string = 'fr') {
    const saved = localStorage.getItem('language') || defaultLang;
    this.translate.setFallbackLang(defaultLang).subscribe();
    this.translate.use(saved).subscribe();
  }
}
