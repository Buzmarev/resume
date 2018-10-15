import { Pipe } from "@angular/core";

@Pipe ({
	name: "phonePipe"
})
export class PhonePipe {
	transform (value: any): string {
		let phone = String(value);
		let phoneNum = phone.replace(/D/g, '');
		if (phoneNum.length == 11) {
			return "+7(" + 
					phoneNum.substring(1, 4) +
					")" +
					phoneNum.substring(4, 7) +
					"-" +
					phoneNum.substring(7, 9) +
					"-" +
					phoneNum.substring(9, 11);
		}
	}
}