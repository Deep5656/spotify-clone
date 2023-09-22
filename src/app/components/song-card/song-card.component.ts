import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-card',
  templateUrl: './song-card.component.html',
  styleUrls: ['./song-card.component.css']
})
export class SongCardComponent implements OnInit {

  @Input() playlistThumbnail!: string;
  @Input() title!: string;
  @Input() description!: string;

  constructor(){}
  ngOnInit(): void {
  }

}
