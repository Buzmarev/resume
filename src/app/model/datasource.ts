import { Injectable } from '@angular/core';
import { Jobs } from './jobs.model';
import { Skills } from './skills.model';
import { Personal } from './personal.model';

@Injectable()
export class DataSource {
	private jobs: Jobs[];
	private skills: Skills[];
	private personal: Personal;

	constructor() {
		this.jobs = new Array<Jobs>(
			new Jobs(
				1,
				`ОАО "Автобан"`,
				`Мастер СМР`,
				`Афипский`,
				``,
				`Организация строительно-монтажных работ. 
				Контроль качества выполненных работ. 
				Ведение исполнительной документации, сдача исполнительной документации генподрядной организации и заказчику.
				Ведение специализированных журналов.`,
				new Date(2011, 6),
				new Date(2013, 0)
			),
			new Jobs(
				2,
				`СКФ ООО "Дорога"`,
				`Инженер ПТО`,
				`Армавир`,
				``,
				`Ведение исполнительной документации, сдача исполнительной документации генподрядной организации и заказчику. Ведение специализированных журналов. Составление графиков производства работ. Составление проекта производства работ.`,
				new Date(2013, 0),
				new Date(2014, 6)
			),
			new Jobs(
				3,
				`ООО "Новадорстрой"`,
				`Прораб`,
				`Краснодар`,
				``,
				`Организация строительно-монтажных работ. Контроль качества выполненных работ. Ведение исполнительной документации, сдача исполнительной документации генподрядной организации и заказчику. Составление проекта производства работ. Ведение специализированных журналов. Составление графиков производства работ. Составление схем организации дорожного движения. Составление бюджета плановых доходов и расходов по объекту.`,
				new Date(2014, 6),
				new Date(2015, 6)
			),
			new Jobs(
				4,
				`ВФ АО «ДСК «Автобан»`,
				`Инженер ПТО`,
				`Армавир`,
				``,
				`Ведение исполнительной документации. Сдача исполнительной документации заказчику, работа с заказчиком и проектным институтом. Проверка проектной документации. Составление графиков производства работ. Составление схем организации дорожного движения. Формирование выполнения по форме КС-2/3.`,
				new Date(2016, 0),
				new Date(2016, 11)
			),
			new Jobs(
				5,
				`Интернет-агентство Webformula`,
				`Back-end разработчик`,
				`Краснодар`,
				`webformula.pro`,
				`Разработка сайтов на базе 1С битрикс.
				Разработка новых и поддержка существующих проектов.
				Самостоятельно переквалифицировался из инженера СМР в Back-end разработчика.
				`,
				new Date(2017, 2),
				new Date()
			)
		);

		this.skills = new Array<Skills>(
			new Skills(
				1,
				`Angular`,
				`angular_icon.jpg`
			),
			new Skills(
				2,
				`Node.JS`,
				`nodejs_icon.png`
			),
			new Skills(
				3,
				`JavaScript`,
				`javascript_icon.png`
			),
			new Skills(
				4,
				`1С-Битрикс`,
				`bitrix_icon.png`
			),
			new Skills(
				5,
				`PHP`,
				`php_icon.png`
			)
		);

		this.personal = new Personal(
			`Григорий Бузмарев`,
			`89086861163`,
			`buzmarev@bk.ru`,
			`web-разработчик`
		);
	}

	getJobs(): Jobs[] {
		return this.jobs;
	}

	getSkills(): Skills[] {
		return this.skills;
	}

	getPersonal(): Personal {
		return this.personal;
	}
}
