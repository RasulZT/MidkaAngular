import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {FeedComponent} from "./feed/feed.component";
import {PublicationsComponent} from "./publications/publications.component";
import {PublicListComponent} from "./public-list/public-list.component";
import {PublicOnlyOneComponent} from "./public-only-one/public-only-one.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'feed',
    component: FeedComponent,
  },
  {
    path: 'pubs',
    component: PublicationsComponent,
  },
  {
    path: 'publication/:category',
    component: PublicListComponent,
  },
  {
    path: 'publication/:category/:publicId',
    component: PublicOnlyOneComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
