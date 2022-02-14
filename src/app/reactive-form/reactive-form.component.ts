import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor() {
  }
  myform = new FormGroup(
    {
      fname: new FormControl(),
      fage: new FormControl(),
    }
  )
  ngOnInit(): void {
  }
  print() {
    console.log(this.myform)
  }
}
