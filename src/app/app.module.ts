import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PublicationsComponent } from './publications/publications.component';
import { PublicOnlyOneComponent } from './public-only-one/public-only-one.component';
import { PublicListComponent } from './public-list/public-list.component';
import { MydropdownComponent } from './mydropdown/mydropdown.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    AboutComponent,
    HeaderComponent,
    SidebarComponent,
    PublicationsComponent,
    PublicOnlyOneComponent,
    PublicListComponent,
    MydropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
