import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
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

  constructor() {

  }

  ngOnInit(): void {
  }

  inc() {
    this.number++
  }

  dec() {
    this.number--
  }

  show() {
    this.titleStyle = "color:red;font-size:20px"
  }

  hide() {
    this.titleStyle = "color:green;font-size:40px"
  }
}
