import {Component, EventEmitter, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-buttom-nav',
  imports: [
    RouterLink,
    RouterLinkActive,
    TranslatePipe
  ],
  templateUrl: './buttom-nav.html',
  styleUrl: './buttom-nav.css',
})
export class ButtomNav {
  @Output() onQuote = new EventEmitter<void>();

  openModal() {
    this.onQuote.emit();
  }
}
