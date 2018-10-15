import { Component } from '@angular/core';
import { Jobs } from '../model/jobs.model';
import { Repository } from '../model/repository.model';

@Component({
	selector: 'app-jobs',
	templateUrl: './jobs.component.html'
})
export class JobsComponent {
	public month = [
	   	'Январь',
	   	'Февраль',
	   	'Март',
	   	'Апрель',
	   	'Май',
	   	'Июнь',
	   	'Июль',
	   	'Август',
	   	'Сентябрь',
	   	'Октябрь',
	   	'Ноябрь',
	   	'Декабрь',
	];

	constructor(private repository: Repository) {}

	getJobs() {
		return this.repository.getJobsArray();
	}
}
