import {Component, EventEmitter, Output, Input} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-ui-button',
  imports: [
  ],
  templateUrl: './ui-button.html',
  styleUrl: './ui-button.css',
})
export class UiButton {

  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary';
  @Input() type: 'button' | 'submit' = 'button';
  @Input() disabled = false;
  @Output() click = new EventEmitter<void>();

  get classes(): string {
    const base = 'px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';
    const variants = {
      primary: 'bg-teal-600 text-white hover:bg-teal-700 shadow-md shadow-teal-500/30 focus:ring-teal-500',
      secondary: 'bg-slate-800 text-white hover:bg-slate-900 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white focus:ring-slate-500',
      outline: 'border-2 border-teal-600 text-teal-700 dark:text-teal-400 dark:border-teal-400 hover:bg-teal-50 dark:hover:bg-slate-800 focus:ring-teal-500'
    };
    return `${base} ${variants[this.variant]}`;
  }

  onClick() {
    if (!this.disabled) {
      this.click.emit();
    }
  }

  protected readonly close = close;
}
