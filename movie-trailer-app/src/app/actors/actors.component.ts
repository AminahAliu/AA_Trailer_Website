import { Component, OnInit } from '@angular/core';
import { Movie } from './movie';
import { Actor } from './actor';
import {PRINCE_TCHALLA} from './real-actors';
import {MRS_WHICH} from './real-actors';
import {MEG_MURRY} from './real-actors';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.css']
})
export class ActorsComponent implements OnInit {
 actors = [PRINCE_TCHALLA, MRS_WHICH, MEG_MURRY];
  constructor() { }

  ngOnInit() {
  }

}
