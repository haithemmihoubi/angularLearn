import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  newName =''
  constructor(private  r:ActivatedRoute) {
    this.r.params.subscribe(data=>{
      this.newName=data['name']
    })
  }

  ngOnInit(): void {
  }

}
