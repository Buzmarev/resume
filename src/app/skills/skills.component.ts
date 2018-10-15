import { Component } from '@angular/core';
import { Skills } from '../model/skills.model';
import { Repository } from '../model/repository.model';

@Component({
	selector: 'app-skills',
	templateUrl: './skills.component.html'
})
export class SkillsComponent {

	constructor(private repository: Repository) {}

	getSkills() {
		return this.repository.getSkillsArray();
	}
}
