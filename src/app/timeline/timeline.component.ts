import { element } from 'protractor';

import { Component, Input, OnInit} from '@angular/core';
import { Jobs } from './../shared/jobs.service';
import { Job } from './../shared/job.model';
import { SortBy } from './../shared/sortBy.pipe';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {

  constructor(private jobsService: Jobs) {
     this.keys = Array(25).fill(0).reduce(arr => { arr.push(arr.length); return arr }, [])
  }

  ngOnInit() {
    this.jobs = this.jobsService.getJobs();
    this.jobs.sort((a, b) => a.hours - b.hours);
    console.log(this.keys);


  }
jobTitle: String;
jobs: Array<Job>
selectedJob: any;
editMode: boolean;
showJobs= 'hide';
keys: any;

legends = [{id: 1, color: '#FF4081'}, {id: 2, color: '#3F51B5'}, {id: 3, color: '#2196F3'}, {id: 4, color: '#00BCD4'}, {id: 5, color: '#009688'}];

  getSchedule(current, last, hours, property, jobs){
    const keys = 25;
    let width = 1.81;
    const min = width / 6;
    const fullWidth = 45;
    let left = 0;
    left = hours * width;
    console.log(jobs);
    if (property === 'left' ) {

        return left + 'rem';
      }

    else if (property === 'width') {
      if (last == true) {
        width = fullWidth - left;

      }
      else {

           width *= jobs[current + 1].hours - hours;
           if (!width) {
             width = 1.5;
           }
      }
        return width + 'rem';
      }
    }

    selectJob(job){

      this.editMode = true;
      this.showJobs = 'show';
      console.log(this.showJobs);
      this.selectedJob = job;
      this.jobTitle = 'Edit Job' + this.selectedJob.id;
      console.log(this.selectedJob);

    }

    getLegends(id){
      console.log(id);


        const bgColor = this.legends.filter(function(elem){
                if (elem.id == id) {
                      return elem.color;
                }
        });
              return bgColor[0].color;
    }



  }


