import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit{
  isMenuOpen = false;
  activeFragment: string | null = null;

  constructor(
    public _ThemeService: ThemeService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.updateActiveFragment();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.activeFragment = this.router.parseUrl(this.router.url).fragment;
    });
  }

  private updateActiveFragment() {
    this.activeFragment =
      this.router.parseUrl(this.router.url).fragment || 'home';
  }

  isActive(fragment: string): boolean {
    return this.activeFragment === fragment;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  closeMenu() {
    this.isMenuOpen = false;
  }

}
