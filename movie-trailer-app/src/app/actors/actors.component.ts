import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { Actor } from './actor';
import {PRINCE_TCHALLA} from './real-actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
 actors = [PRINCE_TCHALLA];
  constructor() { }

  ngOnInit() {
  }

}
