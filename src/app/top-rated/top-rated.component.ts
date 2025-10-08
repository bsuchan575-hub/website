import { Component } from '@angular/core';

interface Movie {
  id: number;
  title: string;
  rating: number;
  votes: string;
  image: string;
  year: number;
  director: string;
  genre: string;
  description: string;
}

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent {
  movies: Movie[] = [
    {
      id: 1,
      title: 'RRR',
      rating: 8.8,
      votes: '~150,234',
      image: 'assets/rrr.jpg',
      year: 2022,
      director: 'S.S. Rajamouli',
      genre: 'Action Drama',
      description: 'A fictional story about two Indian revolutionaries and their journey away from home.'
    },
    {
      id: 2,
      title: 'KGF Chapter 2',
      rating: 8.7,
      votes: '~125,678',
      image: 'assets/kgf2.jpg',
      year: 2022,
      director: 'Prashanth Neel',
      genre: 'Action Crime',
      description: 'The blood-soaked reign of Rocky continues as he seeks absolute power.'
    },
    {
      id: 3,
      title: 'Vikram',
      rating: 8.6,
      votes: '~98,456',
      image: 'assets/vikram.jpg',
      year: 2022,
      director: 'Lokesh Kanagaraj',
      genre: 'Action Thriller',
      description: 'A black ops squad tracks down a mysterious group of masked murderers.'
    },
    {
      id: 4,
      title: 'Kantara',
      rating: 8.5,
      votes: '~112,890',
      image: 'assets/kantara.jpg',
      year: 2022,
      director: 'Rishab Shetty',
      genre: 'Action Thriller',
      description: 'A human vs nature conflict where a demigod protects the community.'
    },
    {
      id: 5,
      title: 'Baahubali 2: The Conclusion',
      rating: 8.4,
      votes: '~200,123',
      image: 'assets/baahubali-2.jpg',
      year: 2017,
      director: 'S.S. Rajamouli',
      genre: 'Epic Action',
      description: 'The epic conclusion reveals why Kattappa killed Baahubali.'
    },
    {
      id: 6,
      title: 'Pushpa: The Rise',
      rating: 8.3,
      votes: '~88,765',
      image: 'assets/pushpa-1.jpg',
      year: 2021,
      director: 'Sukumar',
      genre: 'Action Drama',
      description: 'A labourer rises in the world of red sandalwood smuggling.'
    },
    {
      id: 7,
      title: 'Master',
      rating: 8.2,
      votes: '~76,543',
      image: 'assets/master.jpg',
      year: 2021,
      director: 'Lokesh Kanagaraj',
      genre: 'Action Drama',
      description: 'An alcoholic professor clashes with a ruthless gangster.'
    },
    {
      id: 8,
      title: 'Salaar',
      rating: 8.1,
      votes: '~65,432',
      image: 'assets/salaar.jpg',
      year: 2023,
      director: 'Prashanth Neel',
      genre: 'Action Thriller',
      description: 'A gang leader takes on the criminal underworld to fulfill a promise.'
    }
  ];

  getRatingColor(rating: number): string {
    if (rating >= 8.5) return '#22c55e'; // Green
    if (rating >= 8.0) return '#facc15'; // Yellow
    if (rating >= 7.5) return '#f97316'; // Orange
    return '#64748b'; // Gray
  }
}