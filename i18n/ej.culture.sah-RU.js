ej.addCulture( "sah-RU", {
	name: "sah-RU",
	englishName: "Sakha (Russia)",
	nativeName: "Саха (Россия)",
	language: "sah",
	numberFormat: {
		",": " ",
		".": ",",
		groupSizes: [3,0],
		"NaN": "NAN",
		negativeInfinity: "-∞",
		positiveInfinity: "∞",
		percent: {
			pattern: ["-n%","n%"],
			groupSizes: [3,0],
			",": " ",
			".": ","
		},
		currency: {
			pattern: ["-n$","n$"],
			",": " ",
			".": ",",
			symbol: "с."
		}
	},
	calendars: {
		standard: {
			"/": ".",
			firstDay: 1,
			days: {
				names: ["Өрөбүл","энидиэнньик","Оптуорунньук","Сэрэдээ","Чэппиэр","Бээтинсэ","Субуота"],
				namesAbbr: ["Өр","Бн","Оп","Ср","Чп","Бт","Сб"],
				namesShort: ["Өр","Бн","Оп","Ср","Чп","Бт","Сб"]
			},
			months: {
				names: ["Тохсунньу","Олунньу","Кулун тутар","Муус устар","Ыам ыйа","Бэс ыйа","От ыйа","Атырдьах ыйа","Балаҕан ыйа","Алтынньы","Сэтинньи","Ахсынньы",""],
				namesAbbr: ["Тхс","Олн","Клн","Мсу","Ыам","Бэс","Оты","Атр","Блҕ","Алт","Сэт","Ахс",""]
			},
			monthsGenitive: {
				names: ["тохсунньу","олунньу","кулун тутар","муус устар","ыам ыйын","бэс ыйын","от ыйын","атырдьах ыйын","балаҕан ыйын","алтынньы","сэтинньи","ахсынньы",""],
				namesAbbr: ["тхс","олн","клн","мсу","ыам","бэс","оты","атр","блҕ","алт","сэт","ахс",""]
			},
			AM: ["КИ","ки","КИ"],
			PM: ["КК","кк","КК"],
			patterns: {
				d: "dd.MM.yyyy",
				D: "dddd, yyyy 'с.' MMMM d 'күнэ'",
				t: "H:mm",
				T: "H:mm:ss",
				f: "dddd, yyyy 'с.' MMMM d 'күнэ' H:mm",
				F: "dddd, yyyy 'с.' MMMM d 'күнэ' H:mm:ss",
				M: "MMMM d 'күнэ'",
				Y: "yyyy 'с.' MMMM"
			}
		}
	}
});