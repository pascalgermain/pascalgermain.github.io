export const sections: {
	title: string
	items: {
		date: string
		name: string
		description?: string
		more: { text?: string; bullets?: string[] }
	}[]
}[] = [
	{
		title: 'Expériences professionnelles',
		items: [
			{
				date: '2010-2015',
				name: 'Développeur Web et Mobile Freelance',
				description: 'Nice, puis Paris',
				more: {
					text: 'Réalisation de sites web, applications web et mobiles, dont :',
					bullets: [
						'Ogaming, web tv consacrée aux évènements autour des jeux vidéo : www.ogaming.tv',
						'IDF1, chaîne de télévision sur la TNT en Ile de France, site web : www.idf1.fr , application iPhone/iPad , application Android',
						'Côté Garrigue, boutique en ligne de produits gastronomiques provençaux : www.cote-garrigue.com',
					],
				},
			},
			{
				date: '2012-2014',
				name: 'Développeur Web et Mobile',
				description: 'Close To Me, Paris',
				more: {
					text: 'Utilisation de Symfony2, MongoDB, Twig, jQuery, Knockout, Bootstrap...',
					bullets: [
						'Développement front-end du site web SoCloz : www.socloz.com',
						"Développement et mise en place de l'application web SoCloz sur des sites tiers : www.guydegrenne.fr, www.nafnaf.com...",
					],
				},
			},
			{
				date: '1996-2000',
				name: 'Professeur bilingue anglais de guitare et théorie de la musique',
				more: {
					bullets: [
						'Développement front-end du site web SoCloz : www.socloz.com',
						"Développement et mise en place de l'application web SoCloz sur des sites tiers : www.guydegrenne.fr, www.nafnaf.com...",
					],
				},
			},
		],
	},

	{
		title: 'Études et formations',
		items: [
			{
				date: '2001',
				name: 'Formation Webmaster - Webdesigner',
				more: {
					text: 'HATAMultimedia, création de sites web avec Dreamweaver, Homesite, Flash et Photoshop',
				},
			},
		],
	},
]
