import { SortBy } from './shared/sortBy.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TimelineComponent } from './timeline/timeline.component';
import { JobsComponent } from './jobs/jobs.component';
import { LegendsComponent } from './legends/legends.component';


@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    JobsComponent,
    SortBy,
    LegendsComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
