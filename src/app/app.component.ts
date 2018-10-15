import { Component } from '@angular/core';
import { Repository } from './model/repository.model';

@Component({
	selector: 'app-main',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	constructor(private repository: Repository) {}

	public personal = this.repository.getPersonalObject();

	public curent_year = new Date().getFullYear();
}
