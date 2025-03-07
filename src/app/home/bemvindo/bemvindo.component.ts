
import {ChangeDetectionStrategy, Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-bemvindo',
  templateUrl: './bemvindo.component.html',
  styleUrls: ['./bemvindo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BemvindoComponent implements OnInit {
  title = 'GeekShopping';
  constructor() { }

  ngOnInit(): void {
  }

}
