import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShareServiceService {
  data = {
    'name': 'haithem',
    'country': 'tunisia'
  }
  url = "google.tn"

  print() {
    console.log(this.data.name)
    console.log(this.data.country)
  }

isAdmin=true

  constructor() {
  }
}
