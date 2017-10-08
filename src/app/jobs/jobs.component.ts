import { element } from 'protractor';

import { Component, OnInit, Input, NgModule } from '@angular/core';
import {Jobs} from '../shared/jobs.service';
import {Job} from '../shared/job.model';
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  constructor(private jobService: Jobs) {


  }
  ngOnInit() {
     this.selectedJob = new Job(this.jobLists[0].id, 0, 0);
     console.log(this.selectedJob);
  }
@Input() jobTitle= 'Choose Job';
 @Input() editMode: false;
 @Input() selectedJob: Job;
 jobLists= [{id: 1, label: 'Job 1'}, {id: 2, label: 'Job 2'}, {id: 3, label: 'Job 3'}, {id: 4, label: 'Job 4'}, {id: 5, label: 'Job 5'}];

 @Input() jobs: Array<Job>
@Input() showJobs= 'hide';




  toggleClass(){

     if (this.showJobs == 'hide') {
       this.showJobs = 'show';
     }
      else {
        this.showJobs = 'hide'
      }
  }

  selectJob(event){


  }


  addJob(id, hours, minutes){
       console.log(this.editMode);

       const hour = parseInt(hours);
       const minute = parseInt(minutes);
    if (this.editMode){
      this.jobService.editJob(this.selectedJob, hours, minute);
    }else {
        console.log('coming in add mode');
         const job = new Job(id, hour, minute);
         this.jobService.addJob(job);
    }

      this.toggleClass();

  }
}


