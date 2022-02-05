import { Component, OnInit } from '@angular/core';
import {ShareServiceService} from "../services/share-service.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 verifAdmin :boolean =false
  constructor(private  share:ShareServiceService) {
    this.verifAdmin=this.share.isAdmin
  }

  ngOnInit(): void {
  }

}
