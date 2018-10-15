import { Injectable } from '@angular/core';
import { Jobs } from './jobs.model';
import { Skills } from './skills.model';
import { Personal } from './personal.model';
import { DataSource } from './datasource'

@Injectable()
export class Repository {
    private jobs: Jobs[];
    private skills: Skills[];
    private personal: Personal;

    constructor(private datasource: DataSource) {
        this.jobs = new Array<Jobs>();
        this.datasource.getJobs().forEach(job => this.jobs.unshift(job));
        this.skills = new Array<Skills>();
        this.datasource.getSkills().forEach(skill => this.skills.push(skill));
        this.personal = this.datasource.getPersonal();
    }

    getJobsArray(): Jobs[] {
        return this.jobs;
    }

    getSkillsArray(): Skills[] {
        return this.skills;
    }

    getPersonalObject(): Personal {
        return this.personal;
    }
}
