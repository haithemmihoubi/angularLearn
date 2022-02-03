import {Component, OnInit} from '@angular/core';
import {reduce} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor() {
  }
  ngOnInit(): void {
  }
  // declare an object
  profile = {
    firstname: "haithem",
    lastname: "mihoubi",
    website: "haithem.com",
    country: "tunisia",
    age: 25
  }
  linkImage = "https://www.ideematic.com/wp-content/uploads/2020/07/flutter_logo.png"
  titleStyle = "color:blue;"
  number = 0
  verify=true

  countries=['algerie','tunisie','morroco']

titleClass="title"

jsonProfile={
  "firstname": "haithem",
  "lastname": "mihoubi",
  "website": "haithem.com",
  "country": "tunisia",
  "age": 25
}



  inc() {
    this.number++
  }

  dec() {
    this.number--
  }

  show() {
    this.titleStyle = ""
  }

  hide() {
    this.titleStyle = "visibility:hidden"
  }

  // style
  style1="red"
  style2="30px"
  style3="underline"







}
