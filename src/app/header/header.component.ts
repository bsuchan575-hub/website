import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  navItems = ['Home', 'Movies', 'Celebrities', 'Reviews', 'Top Rated'];
  searchQuery = '';

  constructor(private router: Router) {}

  getRouterLink(item: string): string {
    switch(item) {
      case 'Home': return '/';
      case 'Movies': return '/movies';
      case 'Celebrities': return '/celebrities';
      case 'Reviews': return '/reviews';
      case 'Top Rated': return '/top-rated';
      default: return '/';
    }
  }

  searchMovie() {
    if (this.searchQuery.trim()) {
      const movieTitle = this.searchQuery.trim().toLowerCase().replace(/\s+/g, '-');
      this.router.navigate(['/review', movieTitle]);
      this.searchQuery = '';
    }
  }

  onLogin() {
    this.router.navigate(['/login']);
  }
}