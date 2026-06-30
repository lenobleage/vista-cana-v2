import {Component, signal} from '@angular/core';
import {LanguageBanner} from '../../shared/components/language-banner/language-banner';
import {Navbar} from '../../shared/components/navbar/navbar';
import {RouterOutlet} from '@angular/router';
import {Footer} from '../../shared/components/footer/footer';
import {TranslatePipe} from '@ngx-translate/core';
import {UiModal} from '../../shared/components/ui-modal/ui-modal';
import {ButtomNav} from '../../shared/components/buttom-nav/buttom-nav';

@Component({
  selector: 'app-main-layout',
  imports: [
    LanguageBanner,
    Navbar,
    RouterOutlet,
    Footer,
    TranslatePipe,
    UiModal,
    ButtomNav
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  modalOpen = signal(false);

  openModal() {
    this.modalOpen.set(true);
  }

  closeModal() {
    this.modalOpen.set(false);
  }
}
