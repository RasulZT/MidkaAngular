import {Component, OnInit} from '@angular/core';
import {PublicationsService} from "../publications.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit{
  public publications: any = []

  constructor(private pubsService: PublicationsService, private router: Router) {
  }

  ngOnInit(): void {
    this.publications = this.pubsService.publications
  }

  goToCategoryProducts(publication: any) {
    this.router.navigate(["publication/" + publication.name])
  }


}
