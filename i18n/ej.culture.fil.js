ej.addCulture( "fil", {
	name: "fil",
	englishName: "Filipino",
	nativeName: "Filipino",
	language: "fil",
	numberFormat: {
		currency: {
			symbol: "PhP"
		}
	},
	calendars: {
		standard: {
			days: {
				names: ["Linggo","Lunes","Martes","Miyerkules","Huwebes","Biyernes","Sabado"],
				namesAbbr: ["Lin","Lun","Mar","Miy","Huw","Biy","Sab"],
				namesShort: ["Li","Lu","Ma","Mi","H","B","S"]
			},
			months: {
				names: ["Enero","Pebrero","Marso","Abril","Mayo","Hunyo","Hulyo","Agosto","Setyembre","Oktubre","Nobyembre","Disyembre",""],
				namesAbbr: ["Ene","Peb","Mar","Abr","Mayo","Hun","Hul","Ago","Set","Okt","Nob","Dis",""]
			},
			patterns: {
				D: "dddd, MMMM dd, yyyy",
				f: "dddd, MMMM dd, yyyy h:mm tt",
				F: "dddd, MMMM dd, yyyy h:mm:ss tt",
				M: "dd/MM",
				Y: "MMMM, yyyy"
			}
		}
	}
});
