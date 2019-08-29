import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RedditApiService } from './reddit-api.service';
import { PostViewComponent } from './post-view/post-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AfterPathResolver } from './after-path.resolver';

@NgModule({
  declarations: [
    AppComponent,
    PostViewComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [
    AfterPathResolver,
    RedditApiService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
