import { Component } from '@angular/core';
import { Jobs } from './shared/jobs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [Jobs]
})
export class AppComponent {
  title = 'Job Scheduler';
}
