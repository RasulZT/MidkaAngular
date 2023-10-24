import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
 constructor(private router:Router) {
 }

  goToHome() {
    this.router.navigate([''])
  }

  goToFeed() {
    this.router.navigate(['feed'])
  }

  goToAbout() {
    this.router.navigate(['about'])
  }

  goToPublications() {
    this.router.navigate(['pubs'])
  }
}
