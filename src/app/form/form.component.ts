import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Feedback } from './feedback.model';
declare var $:any;

@Component({
	selector: 'app-form',
	templateUrl: './form.component.html'
})
export class FormComponent {
  	newFeedback: Feedback = new Feedback();

  	getFeedback() {
  		console.log(this.newFeedback);
  	}

  	getValidationMessages(state: any) {
		let messages: string[] = [];
		if (state.errors) {
			for (let errorName in state.errors) {
				switch (errorName) {
					case "required":
						messages.push(`Поле не должно быть пустым`);
						break;
					case "pattern":
						messages.push(`Вы ввели некорректные данные`);
						break;
				}
			}
		}
		return messages;
	}

	submitForm (form: NgForm) {
		if (form.valid) {
			this.getFeedback();
			this.newFeedback = new Feedback();
			form.reset();
			$('#success-form').modal({})
		}
	}
}
