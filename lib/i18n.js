import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/* language translation file */

i18n
	.use(LanguageDetector)
	.init({
		// we init with resources
		resources: {
			fi: {
				translations: {
				// to finnish
					'Hello': 'Terve',
					'world':'maailma',
				},
			},
			en: {
				translations: {
				// to english
					'Hello': 'Hello',
					'world':'world',
				},
			},
			sv: {
				translations: {
				// to swedish
					'Hello': 'Hej',
					'world':'värld',
				},
			},
		},
		fallbackLng: 'en',

		// have a common namespace used around the full app
		ns: ['translations'],
		defaultNS: 'translations',

		keySeparator: false, // we use content as keys

		interpolation: {
			escapeValue: false, // not needed for react!!
			formatSeparator: ',',
		},

		react: {
			wait: true,
		},
	});

export default i18n;
