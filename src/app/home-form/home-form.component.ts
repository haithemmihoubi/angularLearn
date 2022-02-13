import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-home-form',
  templateUrl: './home-form.component.html',
  styleUrls: ['./home-form.component.css']
})
export class HomeFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  add(f: NgForm) {
    let data=f.value;
    //console.log(data.firstname)
    console.log(data)
  }
}
