import { Component, OnInit } from '@angular/core';

interface Review {
  id: number;
  movieTitle: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
  likes: number;
  movieImage: string;
}

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Review[] = [];
  filteredReviews: Review[] = [];
  searchTerm: string = '';

  ngOnInit() {
    this.loadReviews();
    this.filteredReviews = this.reviews;
  }

  loadReviews() {
    // Mock data - in real app, this would come from a service
    this.reviews = [
      {
        id: 1,
        movieTitle: 'RRR',
        rating: 5,
        comment: 'Epic masterpiece! The action sequences and emotional depth are incredible. A must-watch for every cinema lover.',
        author: 'MovieCritic',
        date: '2024-01-15',
        likes: 234,
        movieImage: 'assets/rrr.jpg'
      },
      {
        id: 2,
        movieTitle: 'KGF Chapter 2',
        rating: 4,
        comment: 'Rocky Bhai rules! The cinematography and background score are top-notch. Yash delivers a powerful performance.',
        author: 'ActionFan',
        date: '2024-01-12',
        likes: 189,
        movieImage: 'assets/kgf2.jpg'
      },
      {
        id: 3,
        movieTitle: 'Pushpa: The Rise',
        rating: 4,
        comment: 'Allu Arjun shines as Pushpa Raj. The rustic feel and mass moments are perfectly executed. Waiting for Part 2!',
        author: 'TeluguCinema',
        date: '2024-01-10',
        likes: 156,
        movieImage: 'assets/pushpa-1.jpg'
      },
      {
        id: 4,
        movieTitle: 'Vikram',
        rating: 5,
        comment: 'Kamal Haasan is back with a bang! Lokesh Kanagaraj delivers a brilliant action thriller with amazing cameos.',
        author: 'ThrillerLover',
        date: '2024-01-08',
        likes: 198,
        movieImage: 'assets/vikram.jpg'
      },
      {
        id: 5,
        movieTitle: 'Kantara',
        rating: 5,
        comment: 'A visual and cultural treat! Rishab Shetty\'s performance and the folklore elements are mind-blowing.',
        author: 'CulturalViewer',
        date: '2024-01-05',
        likes: 267,
        movieImage: 'assets/kantara.jpg'
      },
      {
        id: 6,
        movieTitle: 'Baahubali 2: The Conclusion',
        rating: 5,
        comment: 'The epic conclusion lives up to the hype! Visual spectacle with emotional depth. Rajamouli is a genius.',
        author: 'EpicFan',
        date: '2024-01-03',
        likes: 312,
        movieImage: 'assets/baahubali-2.jpg'
      }
    ];
  }

  filterReviews() {
    if (!this.searchTerm) {
      this.filteredReviews = this.reviews;
    } else {
      this.filteredReviews = this.reviews.filter(review =>
        review.movieTitle.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        review.comment.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        review.author.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  likeReview(review: Review) {
    review.likes++;
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}