import { Component } from '@angular/core';

interface Celebrity {
  id: number;
  name: string;
  ranking: number;
  votes: string;
  image: string;
  profession: string;
  popularMovies: string[];
  realName?: string;
  industry: string;
}

@Component({
  selector: 'app-celebrities',
  templateUrl: './celebrities.component.html',
  styleUrls: ['./celebrities.component.css']
})
export class CelebritiesComponent {
  celebrities: Celebrity[] = [
    {
      id: 1,
      name: 'Prabhas',
      ranking: 1,
      votes: '~1',
      image: 'https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor',
      popularMovies: ['Baahubali', 'Salaar', 'Saaho', 'Radhe Shyam'],
      realName: 'Prabhas Raju Uppalapati',
      industry: 'Telugu'
    },
    {
      id: 2,
      name: 'Allu Arjun',
      ranking: 2,
      votes: '~1',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor',
      popularMovies: ['Pushpa', 'Ala Vaikunthapurramuloo', 'Sarrainodu', 'Julayi'],
      realName: 'Allu Arjun',
      industry: 'Telugu'
    },
    {
      id: 3,
      name: 'N.T. Rama Rao Jr.',
      ranking: 3,
      votes: '~181',
      image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor',
      popularMovies: ['RRR', 'Temper', 'Aravinda Sametha', 'Janatha Garage'],
      realName: 'Nandamuri Taraka Rama Rao Jr.',
      industry: 'Telugu'
    },
    {
      id: 4,
      name: 'Rajinikanth',
      ranking: 4,
      votes: '~1',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor',
      popularMovies: ['Kabali', '2.0', 'Enthiran', 'Sivaji'],
      realName: 'Shivaji Rao Gaekwad',
      industry: 'Tamil'
    },
    {
      id: 5,
      name: 'Yash',
      ranking: 5,
      votes: '~1',
      image: 'https://images.unsplash.com/photo-1513956589380-bad6acb9b9d4?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor',
      popularMovies: ['KGF', 'Googly', 'Mr. and Mrs. Ramachari', 'Masterpiece'],
      realName: 'Naveen Kumar Gowda',
      industry: 'Kannada'
    },
    {
      id: 6,
      name: 'Vijay',
      ranking: 6,
      votes: '~3,309',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor',
      popularMovies: ['Leo', 'Master', 'Mersal', 'Sarkar'],
      realName: 'Joseph Vijay Chandrasekhar',
      industry: 'Tamil'
    },
    {
      id: 7,
      name: 'Kamal Haasan',
      ranking: 7,
      votes: '~8,398',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor, Director',
      popularMovies: ['Vikram', 'Indian', 'Dasavathaaram', 'Vishwaroopam'],
      realName: 'Kamal Haasan',
      industry: 'Tamil'
    },
    {
      id: 8,
      name: 'Ajith Kumar',
      ranking: 8,
      votes: '~12,456',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor',
      popularMovies: ['Thunivu', 'Valimai', 'Vivegam', 'Veeram'],
      realName: 'Ajith Kumar',
      industry: 'Tamil'
    },
    {
      id: 9,
      name: 'Mahesh Babu',
      ranking: 9,
      votes: '~15,789',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor',
      popularMovies: ['Sarkaru Vaari Paata', 'Maharshi', 'Bharat Ane Nenu', 'Spyder'],
      realName: 'Mahesh Babu Ghattamaneni',
      industry: 'Telugu'
    },
    {
      id: 10,
      name: 'Ram Charan',
      ranking: 10,
      votes: '~18,234',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor',
      popularMovies: ['RRR', 'Rangasthalam', 'Dhruva', 'Magadheera'],
      realName: 'Konidela Ram Charan',
      industry: 'Telugu'
    },
    {
      id: 11,
      name: 'Vijay Sethupathi',
      ranking: 11,
      votes: '~21,567',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor, Producer',
      popularMovies: ['Vikram Vedha', '96', 'Super Deluxe', 'Master'],
      realName: 'Vijay Sethupathi',
      industry: 'Tamil'
    },
    {
      id: 12,
      name: 'Dulquer Salmaan',
      ranking: 12,
      votes: '~25,890',
      image: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=400&h=400&fit=crop&crop=face',
      profession: 'Actor, Singer',
      popularMovies: ['Sita Ramam', 'Bangalore Days', 'Charlie', 'Kurup'],
      realName: 'Dulquer Salmaan',
      industry: 'Malayalam'
    }
  ];

  getRankingColor(ranking: number): string {
    if (ranking <= 3) return '#facc15'; // Gold for top 3
    if (ranking <= 6) return '#94a3b8'; // Silver for 4-6
    if (ranking <= 9) return '#b45309'; // Bronze for 7-9
    return '#64748b'; // Gray for 10-12
  }

  getIndustryColor(industry: string): string {
    switch(industry) {
      case 'Telugu': return '#dc2626'; // Red
      case 'Tamil': return '#2563eb'; // Blue
      case 'Kannada': return '#16a34a'; // Green
      case 'Malayalam': return '#7c3aed'; // Purple
      default: return '#64748b';
    }
  }
}