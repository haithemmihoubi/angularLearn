import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private _name = ''
  private _id = ''
  private _country = ''

  constructor(public route: ActivatedRoute) {
    /*this.route.params.subscribe(data => {
      this.id = data['id']
      this.name = data['name']
    })*/
    this.route.queryParams.subscribe(
      data => {
        this._name = data['name']
        this._id = data['id']
        this._country = data['country']
      }
    )

  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  ngOnInit(): void {
  }

}
