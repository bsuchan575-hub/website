import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Movie {
  title: string;
  description: string;
  image: string;
  genre?: string;
  year?: number;
  director?: string;
}

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  movie!: Movie;
  rating = 0;
  comment = '';
  stars = [1,2,3,4,5];
  hoverRating = 0;

  // Extended movies list
  movies: Movie[] = [
    { 
      title: 'Baahubali: The Beginning', 
      description: 'The story of Shivudu, who discovers his extraordinary heritage and sets out to rescue the queen of Mahishmati.', 
      image: 'assets/baahubali-1.jpg',
      genre: 'Epic Action',
      year: 2015,
      director: 'S.S. Rajamouli'
    },
    { 
      title: 'Baahubali 2: The Conclusion', 
      description: 'The epic conclusion reveals why Kattappa killed Baahubali and follows Mahendra Baahubali\'s quest for justice.', 
      image: 'assets/baahubali-2.jpg',
      genre: 'Epic Action',
      year: 2017,
      director: 'S.S. Rajamouli'
    },
    { 
      title: 'RRR', 
      description: 'A fictional story about two Indian revolutionaries and their journey away from home before they started fighting for their country.', 
      image: 'assets/rrr.jpg',
      genre: 'Action Drama',
      year: 2022,
      director: 'S.S. Rajamouli'
    },
    { 
      title: 'KGF Chapter 2', 
      description: 'The blood-soaked reign of Rocky continues as he seeks absolute power and control over the KGF empire.', 
      image: 'assets/kgf2.jpg',
      genre: 'Action Crime',
      year: 2022,
      director: 'Prashanth Neel'
    },
    { 
      title: 'Pushpa: The Rise', 
      description: 'A labourer rises in the world of red sandalwood smuggling, becoming a powerful figure in the syndicate.', 
      image: 'assets/pushpa-1.jpg',
      genre: 'Action Drama',
      year: 2021,
      director: 'Sukumar'
    },
    { 
      title: 'Vikram', 
      description: 'A black ops squad led by a high-ranking officer is assigned to track down a mysterious group of masked murderers.', 
      image: 'assets/vikram.jpg',
      genre: 'Action Thriller',
      year: 2022,
      director: 'Lokesh Kanagaraj'
    },
    { 
      title: 'Kantara', 
      description: 'A human vs nature conflict in a coastal village where a demigod protects the community and its forest.', 
      image: 'assets/kantara.jpg',
      genre: 'Action Thriller',
      year: 2022,
      director: 'Rishab Shetty'
    },
    { 
      title: 'Master', 
      description: 'An alcoholic professor is sent to a juvenile school where he clashes with a ruthless gangster.', 
      image: 'assets/master.jpg',
      genre: 'Action Drama',
      year: 2021,
      director: 'Lokesh Kanagaraj'
    },
    { 
      title: 'Salaar', 
      description: 'A gang leader makes a promise to a dying friend and takes on the criminal underworld to fulfill it.', 
      image: 'assets/salaar.jpg',
      genre: 'Action Thriller',
      year: 2023,
      director: 'Prashanth Neel'
    },
    { 
      title: 'Leo', 
      description: 'A café owner in Kashmir gets entangled in a dispute with a gang of criminals, revealing his dark past.', 
      image: 'assets/leo.jpg',
      genre: 'Action Thriller',
      year: 2023,
      director: 'Lokesh Kanagaraj'
    },
    { 
      title: 'Jai Bhim', 
      description: 'A tribal woman and a righteous lawyer battle for justice when her husband goes missing from police custody.', 
      image: 'assets/jai-bhim.jpg',
      genre: 'Legal Drama',
      year: 2021,
      director: 'T.J. Gnanavel'
    },
    { 
      title: 'Vikram Vedha', 
      description: 'A tough police officer sets out to track down and kill an equally tough gangster.', 
      image: 'assets/vikram-vedha.jpg',
      genre: 'Action Crime',
      year: 2017,
      director: 'Pushkar-Gayathri'
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const title = params.get('title');
      if (title) {
        this.loadMovie(title);
      }
    });
  }

  loadMovie(urlTitle: string) {
    const searchTitle = this.formatSearchTitle(urlTitle);
    
    // Find movie in predefined list
    const foundMovie = this.movies.find(movie => 
      this.normalizeTitle(movie.title) === searchTitle
    );
    
    if (foundMovie) {
      this.movie = foundMovie;
    } else {
      // Create dynamic movie for searched title
      this.movie = {
        title: this.formatDisplayTitle(urlTitle),
        description: 'Share your thoughts and rate this movie.',
        image: 'assets/default-movie.jpg' // Make sure you have this image
      };
    }
    
    // Reset form
    this.rating = 0;
    this.comment = '';
    this.hoverRating = 0;
  }

  private normalizeTitle(title: string): string {
    return title.toLowerCase().replace(/[^a-z0-9]/g, '');
  }

  private formatSearchTitle(urlTitle: string): string {
    return urlTitle.toLowerCase().replace(/-/g, '');
  }

  private formatDisplayTitle(urlTitle: string): string {
    return urlTitle.split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  setRating(star: number) { 
    this.rating = star; 
  }

  setHoverRating(star: number) {
    this.hoverRating = star;
  }

  clearHoverRating() {
    this.hoverRating = 0;
  }

  submitReview() {
    if (this.rating === 0) { 
      alert('Please select a rating!'); 
      return; 
    }
    
    const review = {
      movie: this.movie.title,
      rating: this.rating,
      comment: this.comment || 'No comment',
      date: new Date().toLocaleDateString(),
      timestamp: new Date().toISOString()
    };
    
    console.log('Review submitted:', review);
    this.saveReviewToLocalStorage(review);
    
    alert(`Thanks for reviewing "${this.movie.title}"!\nRating: ${this.rating} stars`);
    
    // Reset form
    this.rating = 0;
    this.comment = '';
    this.hoverRating = 0;
  }

  private saveReviewToLocalStorage(review: any) {
    try {
      const existingReviews = JSON.parse(localStorage.getItem('movieReviews') || '[]');
      existingReviews.push(review);
      localStorage.setItem('movieReviews', JSON.stringify(existingReviews));
    } catch (error) {
      console.error('Error saving review to localStorage:', error);
    }
  }
}