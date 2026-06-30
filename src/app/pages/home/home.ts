import {Component, inject} from '@angular/core';
import {Translation} from '../../core/services/translation';
import {TranslatePipe} from '@ngx-translate/core';
import {UiButton} from '../../shared/components/ui-button/ui-button';
import {UiCard} from '../../shared/components/ui-card/ui-card';

@Component({
  selector: 'app-home',
  imports: [
    TranslatePipe,
    UiButton,
    UiCard
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  translationService = inject(Translation);
}
