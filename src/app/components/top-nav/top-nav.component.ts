import { Component, OnInit,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { SearchBarService } from 'src/app/services/search-bar.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit{

  search:any=false;

  constructor(private router:Router,private service:SearchBarService){}
  ngOnInit(): void {    
      this.service.isSearchBarAvailable.subscribe((data)=>{
         this.search = data;
        //  console.log("nav called");
         
    });
  }

  onNavigateToLogin(){
    this.router.navigate(['/','login']);
  }
}
