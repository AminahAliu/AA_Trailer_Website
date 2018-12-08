import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'ed6231f16be794a6e311f65e095f0c13';
  private movie_string: string;
  private id: number;

  constructor(public _http: HttpClient) { }

  searchMovie(movie: string) {
    this.movie_string = movie;
    return this._http.get(this.movie_url + 'search/movie?query=' + this.movie_string + '&api_key=' + this.api_key);
  }

  getUpcomingMovies() {
    // tslint:disable-next-line:max-line-length
    return this._http.get(this.movie_url + 'discover/movie?primary_release_date.gte=2018-11-25&primary_release_date.lte=2019-02-28' + '&api_key=' + this.api_key);
  }

  getPopularMovies() {
    return this._http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }

  getMovie(id: number) {
    return this._http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
  }

  getPopularPeople() {
    return this._http.get(this.movie_url + 'person/popular' + '?api_key=ed6231f16be794a6e311f65e095f0c13' + '&language=en-US&page=1');
  }
  getPerson(id: number) {
    return this._http.get(this.movie_url + 'person/' + id + '?api_key=' + this.api_key);
  }
}

// Get popular movies api
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=API_KEY

// Get upcoming movies api
// tslint:disable-next-line:max-line-length
// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-11-25&primary_release_date.lte=2019-02-28&api_key=API_KEY

// Search movies api
// https://api.themoviedb.org/3/search/movie?query=SEARCH_STRING&api_key=API_KEY

// Get movie from api
// https://api.themoviedb.org/3/movie/ID?api_key=API_KEY

// Get actor from api
// https://api.themoviedb.org/3/person/ID?api_key=API_KEY
