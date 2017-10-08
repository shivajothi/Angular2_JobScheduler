import { element } from 'protractor';
import { Job } from './job.model';
import { Injectable } from '@angular/core';

@Injectable()
export class Jobs {
    jobs: Array<Job> = [];
    constructor() { }
    
    getJobs() {
        return this.jobs;
    }

    addJob(job: Job) {
        console.log(this.jobs.indexOf(job));
        let filtered = this.jobs.filter(function (element, index, array) {
            if (element.id === job.id) {
                alert("Cannot add Job ! Job already exists ! ");
                return;
            }
            else if (element.hours === job.hours) {
                alert("Cannot add this time ! Time already blocked ! ");
                return;
            }


        });

        console.log(filtered);

        this.jobs.push(job);
        this.jobs.sort((a, b) => a.hours - b.hours);
    }

    editJob(job: Job, hours, minutes) {

        let editedJob = this.jobs.filter(function (element, index, jobs) {

            if (element.id == job.id) {
                element.hours = hours;
                element.minutes = minutes;
            }
            else {
                console.log(job);
            }
        });
        console.log(editedJob);
    }

}