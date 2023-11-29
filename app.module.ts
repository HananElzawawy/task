import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { VideoPlayComponent } from './video-play/video-play.component';
import { AppbarComponent } from './appbar/appbar.component';
import { MenueComponent } from './menue/menue.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PagesComponent } from './menue/pages/pages.component';
import { HeaderComponent } from './appbar/header/header.component';


@NgModule({

  declarations: [
    AppComponent,
    VideoPlayComponent,
    AppbarComponent,
    MenueComponent,
    SidebarComponent,
    PagesComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    YouTubePlayerModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
