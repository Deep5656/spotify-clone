import { Component, OnInit } from '@angular/core';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private service:SearchBarService) { }
  ngOnInit(): void {
  }

  songs: any = [
    { playlistThumbnail: "assets/spotify-green.png", title: "Ram Siya Ram", description: "ideas of different topics that will not only assist." },
    { playlistThumbnail: "assets/spotify-green.png", title: "Ram Siya Ram", description: "ideas of different topics that will not only assist." },
    { playlistThumbnail: "assets/spotify-green.png", title: "Ram Siya Ram", description: "ideas of different topics that will not only assist." },
    { playlistThumbnail: "assets/spotify-green.png", title: "Ram Siya Ram", description: "ideas of different topics that will not only assist." },
    { playlistThumbnail: "assets/spotify-green.png", title: "Ram Siya Ram", description: "ideas of different topics that will not only assist." },
    { playlistThumbnail: "assets/spotify-green.png", title: "Ram Siya Ram", description: "ideas of different topics that will not only assist." },
    { playlistThumbnail: "assets/spotify-green.png", title: "Ram Siya Ram", description: "ideas of different topics that will not only assist." },
  ]
  search:any;

  searchAvailable(){
    this.search = true;
    this.service.onSearchBarAvailable(this.search);
    // console.log("home called");
    
  }
  searchNotAvailable(){
    this.search = false;
    this.service.onSearchBarAvailable(this.search);
    // console.log("home1 called");
  }

}
