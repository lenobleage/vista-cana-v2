import {Component, EventEmitter, Input, Output} from '@angular/core';
import {UiButton} from '../ui-button/ui-button';
import {TranslatePipe} from '@ngx-translate/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ui-modal',
  imports: [
    UiButton,
    TranslatePipe,
    FormsModule
  ],
  templateUrl: './ui-modal.html',
  styleUrl: './ui-modal.css',
})
export class UiModal {
  @Input() open = false;
  @Input() title = '';
  @Input() description = '';
  @Output() openChange = new EventEmitter<boolean>();

  close() {
    this.open = false;
    this.openChange.emit(false);
  }

  submit() {
    // Logique d'envoi (éventuellement)
    this.close();
  }
}
