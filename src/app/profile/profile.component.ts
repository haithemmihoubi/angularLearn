import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public name = ''
  public id = ''
  public country = ''

  /*  constructor(public route: ActivatedRoute) {
      /!*this.route.params.subscribe(data => {
        this.id = data['id']
        this.name = data['name']
      })*!/
      /!*this.route.queryParams.subscribe(
        data => {
          this.name = data['name']
          this.id = data['id']
          this.country = data['country']
        })*!/


    }*/


  constructor() {

  }

  ngOnInit(): void {
  }

}
