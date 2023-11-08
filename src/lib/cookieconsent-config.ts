import { CookieConsentConfig, loadScript,acceptedCategory, getUserPreferences } from 'vanilla-cookieconsent';

const enableGoogleAnalytics = () => {
    loadScript('https://www.googletagmanager.com/gtag/js?id=G-WSQT36X5WB', {
        async: ''
    });

    window.dataLayer = window.dataLayer || [];
    window.gtag = function(){dataLayer.push(arguments);} // changed function gtag => window.gtag = function
    gtag('js', new Date());
    gtag('config', 'G-WSQT36X5WB');
}

const disableGoogleAnalytics = () => {
    gtag('consent', 'update', {
        'analytics_storage': 'denied',
        'ad_storage': 'denied'
    });
    window['ga-disable-G-WSQT36X5WB'] = true;
}


const config: CookieConsentConfig = {
    onConsent: () => {
        if(acceptedCategory('analytics')) {
            enableGoogleAnalytics();
        }
    },

    onChange: ({changedCategories}) => {
        if(changedCategories.includes('analytics')){
            if(acceptedCategory('analytics')){
                enableGoogleAnalytics();
            }else{
                disableGoogleAnalytics();
            }
        }
    },
	categories: {
		necessary: {
			enabled: true,
			readOnly: true
		},
		analytics: {
			autoClear: {
				cookies: [
					{
						name: /^_ga/ // regex: match all cookies starting with '_ga'
					},
					{
						name: '_gid' // string: exact cookie name
					}
				]
			},

			// https://cookieconsent.orestbida.com/reference/configuration-reference.html#category-services
			services: {
				ga: {
					label: 'Google Analytics',
					onAccept: () => {},
					onReject: () => {}
				}
			}
		},
		ads: {}
	},

	onFirstConsent: ({ cookie }) => {
		console.log('onFirstConsent fired', cookie);
	},

	// onConsent: ({ cookie }) => {
	// 	console.log('onConsent fired!', cookie, getUserPreferences());
	// },

	// onChange: ({ changedCategories, changedServices }) => {
	// 	console.log('onChange fired!', changedCategories, changedServices);
	// },

	onModalReady: ({ modalName }) => {
		console.log('ready:', modalName);
	},

	onModalShow: ({ modalName }) => {
		console.log('visible:', modalName);
	},

	onModalHide: ({ modalName }) => {
		console.log('hidden:', modalName);
	},

	guiOptions: {
		consentModal: {
			layout: 'box inline',
			position: 'bottom left',
			equalWeightButtons: true,
			flipButtons: false
		},
		preferencesModal: {
			layout: 'box',
			equalWeightButtons: true,
			flipButtons: false
		}
	},

	language: {
		default: 'de',
		translations: {
			de: {
				consentModal: {
					title: 'Wir nutzen Cookies',
					description:
						'Wir nutzen Cookies auf unserer Website. Einige von diesen sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu verbessern. Weitere Informationen zu den von uns verwendeten Cookies und Ihren Rechten als Nutzer finden Sie in unserer Daten­schutz­erklärung und unserem Impressum.',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Alle ablehnen',
					showPreferencesBtn: 'Individuell einstellen',
					// closeIconLabel: 'Reject all and close modal',
					footer: `
							<a href="/impressum" target="_blank">Impressum</a>
							<a href="/datenschutz" target="_blank">Datenschutzinformation</a>
					`
				},
				preferencesModal: {
					title: 'Cookie Einstellungen',
					acceptAllBtn: 'Alle akzeptieren',
					acceptNecessaryBtn: 'Alle ablehnen',
					savePreferencesBtn: 'Auswahl akzeptieren',
					closeIconLabel: 'Modal schließen',
					serviceCounterLabel: 'Service|Service',
					sections: [
						{
							title: 'Deine Privatsphäre Einstellungen',
							description: `Hier können Sie einige Präferenzen im Zusammenhang mit der Verarbeitung Ihrer persönlichen Informationen anpassen. Sie können Ihre Auswahl jederzeit über diesen Link überprüfen und ändern. Um Ihre Zustimmung zu den unten beschriebenen spezifischen Verarbeitungsaktivitäten zu verweigern, schalten Sie die Schalter aus oder verwenden Sie die Schaltfläche "Alle ablehnen" und bestätigen Sie, dass Sie Ihre Auswahl speichern möchten.`
						},
						{
							title: 'Essenziell',
							description:
								'Diese Cookies sind essenziell für die Funktion der Webseite und können nicht abgelehnt werden.',

							//this field will generate a toggle linked to the 'necessary' category
							linkedCategory: 'necessary'
						},
						{
							title: 'Performance und Analyse',
							description:
								'Diese Cookies sammeln Informationen wie du die Seite nutzt. Alle Daten werden anonymisiert und können nicht dafür verwendet werden dich zu identifizieren.',
							linkedCategory: 'analytics',
							cookieTable: {
								caption: 'Cookie Tabelle',
								headers: {
									name: 'Cookie',
									domain: 'Domain',
									desc: 'Beschreibung'
								},
								body: [
									{
										name: '_ga',
										domain: 'yourdomain.com',
										desc: 'Description 1'
									},
									{
										name: '_gid',
										domain: 'yourdomain.com',
										desc: 'Description 2'
									}
								]
							}
						},
						
						{
							title: 'Mehr Information',
							description:
								'Für weitere Informationen mit dem Umgang deiner Daten, <a href="/kontakt">kontaktiere uns</a> bitte.'
						}
					]
				}
			}
		}
	}
};

export default config;