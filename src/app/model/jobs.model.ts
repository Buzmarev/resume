export class Jobs {
	public diff_date: string;

	private declOfNum(n: number, titles: string[]) {
		let bool = (n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && 
					n % 10 <= 4 && 
					(n % 100 < 10 || n % 100 >= 20) ? 1 : 2;
	  	return titles[bool];
	}

	private yearStr = [
		"год",
		"года",
		"лет"
	]

	private monthStr = [
		"месяц",
		"месяца",
		"месяцев"
	]

	constructor(
		public id: number,
		public job: string,
		public position: string,
		public city: string,
		public email: string,
		public description: string,
		public date_from: Date,
		public date_to: Date
	) {
		let date_from_month = date_from.getFullYear() * 12 + date_from.getMonth();
		let date_to_month = date_to.getFullYear() * 12 + date_to.getMonth();
		let diff_date_year = Math.floor((date_to_month - date_from_month) / 12);
		let diff_date_month = (date_to_month - date_from_month) % 12;
		this.diff_date = `${diff_date_year} ${this.declOfNum(diff_date_year, this.yearStr)} ${diff_date_month} ${this.declOfNum(diff_date_month, this.monthStr)}`;
	}
}