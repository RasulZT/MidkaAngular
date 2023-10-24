import {Component, OnInit} from '@angular/core';
import {PublicationsService} from "../publications.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-public-list',
  templateUrl: './public-list.component.html',
  styleUrls: ['./public-list.component.scss']
})
export class PublicListComponent implements OnInit{
  products: any[] = []
  category: string = ""
  productId!: number;

  constructor(private productService: PublicationsService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.category = this.activatedRoute.snapshot.params["category"]
    this.productId = this.activatedRoute.snapshot.params["productId"]

    this.products = this.productService.publications.find(item => item.name === this.category).products
  }

  goToRealPage(i: number) {
    this.router.navigate([`publication/${this.category}/${i}`])
  }

  removeProduct(i: number) {
    this.products = this.products.filter(item => {
      return item !== this.products[i]
    });
    this.productService.publications.find(item => item.name === this.category).products = this.products
  }
}
