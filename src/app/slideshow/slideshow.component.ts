import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Movie {
  title: string;
  description: string;
  image: string;
  rating: number;
}

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
  movies: Movie[] = [
    {
      title: 'RRR',
      description: 'A roaring revolution of friendship and freedom. Directed by S.S. Rajamouli starring Ram Charan and Jr. NTR.',
      image: 'assets/rrr.jpg',
      rating: 4.8
    },
    {
      title: 'KGF Chapter 2',
      description: 'The rise of Rocky Bhai continues. A tale of ambition, power, and vengeance.',
      image: 'assets/kgf 2.png',
      rating: 4.7
    },
    {
      title: 'Pushpa: The Rise',
      description: 'The story of Pushpa Raj — a laborer who rises in the world of red sandalwood smuggling.',
      image: 'assets/p1.jpg',
      rating: 4.5
    },
    {
      title: 'Vikram',
      description: 'A masterful thriller starring Kamal Haasan, Vijay Sethupathi, and Fahadh Faasil — action at its finest.',
      image: 'assets/vikram.jpg',
      rating: 4.6
    },
    {
      title: 'Baahubali 2: The Conclusion',
      description: 'The epic conclusion to India’s grandest cinematic saga by S.S. Rajamouli.',
      image: 'assets/Baahubali-2-poster-768x432.jpg',
      rating: 4.9
    }
  ];

  currentIndex = 0;
  intervalId: any;

  constructor(private router: Router) {}

  ngOnInit() {
    this.startSlideshow();
  }

  startSlideshow() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000); // auto every 5 seconds
  }

  goToReviewPage(movieTitle: string) {
    this.router.navigate(['/review', movieTitle]);
  }

  // Manually go to previous slide
  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.movies.length) % this.movies.length;
  }

  // Manually go to next slide
  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.movies.length;
  }

  // Stop auto-slideshow when user clicks buttons (optional)
  stopSlideshow() {
    clearInterval(this.intervalId);
  }
}
