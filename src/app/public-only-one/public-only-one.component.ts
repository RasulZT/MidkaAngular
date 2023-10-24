import {Component, OnInit} from '@angular/core';
import {PublicationsService} from "../publications.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-public-only-one',
  templateUrl: './public-only-one.component.html',
  styleUrls: ['./public-only-one.component.scss']
})
export class PublicOnlyOneComponent implements OnInit{
  public product: any = {}
  categoryName: string = ""
  productId: number = 0

  constructor(private productService: PublicationsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.categoryName = this.activatedRoute.snapshot.params["category"];
    this.productId = this.activatedRoute.snapshot.params["productId"]
    this.product = this.productService.publications.find(item => item.name === this.categoryName).products[this.productId]
  }

  changeCurrentImg(image: string) {
    this.product.currectImg = image
  }

  shareWithTelegram() {
    document.location.href = "https://t.me/share/url?url=" + this.product.realPage
  }

  pressLike() {
    this.productService.publications.find(item => item.name === this.categoryName).products[this.productId].likes = this.productService.publications.find(item => item.name === this.categoryName).products[this.productId].likes + 1
  }
}
