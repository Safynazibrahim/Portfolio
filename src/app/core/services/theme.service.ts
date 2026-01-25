import { Injectable } from '@angular/core';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: Theme = 'dark';

  init() {
    const saved = localStorage.getItem(STORAGE_KEY) as Theme | null;
    this.setTheme(saved ?? this.theme);
  }
  get current(): Theme {
    return this.theme;
  }

  toggle() {
    this.setTheme(this.theme === 'dark' ? 'light' : 'dark');
  }
  private setTheme(theme: Theme) {
    this.theme = theme;
    localStorage.setItem(STORAGE_KEY, theme);

    const html = document.documentElement;
    theme === 'dark'
      ? html.classList.add('dark')
      : html.classList.remove('dark');
  }
}
