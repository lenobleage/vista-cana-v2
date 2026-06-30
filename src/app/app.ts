import {Component, inject, signal} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {UiButton} from './shared/components/ui-button/ui-button';
import {Translation} from './core/services/translation';
import {MainLayout} from './layouts/main-layout/main-layout';

@Component({
  selector: 'app-root',
  imports: [
    UiButton,
    MainLayout
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('vista-cana-ui');
  private translationService = inject(Translation);

  ngOnInit() {
    this.translationService.init('fr');
  }
}
