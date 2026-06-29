import {effect, Service, signal} from '@angular/core';

@Service()
export class Theme {

  private isDark = signal<boolean>(false);

  constructor() {
    // Initialisation : préférence stockée ou système
    const stored = localStorage.getItem('theme') === 'dark';
    const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDark.set(stored || prefers);
    this.applyTheme(this.isDark());

    effect(() => {
      const dark = this.isDark();
      localStorage.setItem('theme', dark ? 'dark' : 'light');
      this.applyTheme(dark);
    });
  }

  private applyTheme(dark: boolean) {
    document.documentElement.classList.toggle('dark', dark);
  }

  toggle() {
    this.isDark.update(v => !v);
  }

  get darkMode() {
    return this.isDark.asReadonly();
  }
}
