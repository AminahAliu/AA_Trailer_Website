import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-actor-home',
  templateUrl: './actor-home.component.html',
  styleUrls: ['./actor-home.component.css']
})
export class ActorHomeComponent implements OnInit {
  popular_movies: any;
  upcoming_movies: any;
  search_result: any;
  movie: any;
  popular_people: any;

  constructor(public movieService: MovieService) {
    // get upcoming movies
    this.movieService.getUpcomingMovies().subscribe(data => {
      this.upcoming_movies = data['results'];
      // console.log(this.upcoming_movies);
    });

    // get popular movies
    this.movieService.getPopularMovies().subscribe(data => {
      this.popular_movies = data['results'];
      // console.log(this.popular_movies);
    });

    // get popular people
    this.movieService.getPopularPeople().subscribe(data => {
      this.popular_people = data['results'];
      // console.log(this.popular_people);
    });
  }

  // get search results of movies
  searchMovies() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.search_result = data['results'];
      // console.log(this.search_result);
    });
  }

  ngOnInit() {
  }

}
