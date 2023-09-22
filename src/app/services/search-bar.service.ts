import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchBarService  {

  constructor() { }

  // create an event
  isSearchBarAvailable = new EventEmitter<any>();

  // raise the event
  onSearchBarAvailable(data:any){
    this.isSearchBarAvailable.emit(data);
  }

}
