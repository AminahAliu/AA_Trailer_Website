import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-actor-api',
  templateUrl: './actor-api.component.html',
  styleUrls: ['./actor-api.component.css']
})
export class ActorApiComponent implements OnInit {
  person: any;
  constructor(private router: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['personID'];
      this.movieService.getPerson(id).subscribe(data => {
        this.movie = data;
        // console.log(data);
      });
    });
  }

}
