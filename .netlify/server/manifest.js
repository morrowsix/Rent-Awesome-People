export const manifest = {
	appDir: "_app",
	assets: new Set(["2022-08-23-KeyVisual_RAP-nro.png","2022-10-13-Header-Background-nro.png","BeatrixWestphal2.png","FroheMitarbeiterin.png","HotelCheckIn.png","MannImPool.png","Rectangle.png","VerlaufBanner.png","beatrix-westphal.png","facebook-icon.png","favicon.png","fonts/signika-v20-latin-300.eot","fonts/signika-v20-latin-300.svg","fonts/signika-v20-latin-300.ttf","fonts/signika-v20-latin-300.woff","fonts/signika-v20-latin-300.woff2","fonts/signika-v20-latin-500.eot","fonts/signika-v20-latin-500.svg","fonts/signika-v20-latin-500.ttf","fonts/signika-v20-latin-500.woff","fonts/signika-v20-latin-500.woff2","fonts/signika-v20-latin-600.eot","fonts/signika-v20-latin-600.svg","fonts/signika-v20-latin-600.ttf","fonts/signika-v20-latin-600.woff","fonts/signika-v20-latin-600.woff2","fonts/signika-v20-latin-700.eot","fonts/signika-v20-latin-700.svg","fonts/signika-v20-latin-700.ttf","fonts/signika-v20-latin-700.woff","fonts/signika-v20-latin-700.woff2","fonts/signika-v20-latin-regular.eot","fonts/signika-v20-latin-regular.svg","fonts/signika-v20-latin-regular.ttf","fonts/signika-v20-latin-regular.woff","fonts/signika-v20-latin-regular.woff2","heroes/Backofficezauberer.png","heroes/Empfangselfen.png","heroes/Kuechenmagier.png","heroes/Reinigungsninjas.png","heroes/Servicehelden.png","insta-icon.png","professionelleKellnerin.png","rap-logo-weiss.png","rap-logo.png"]),
	mimeTypes: {".png":"image/png",".eot":"application/vnd.ms-fontobject",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2"},
	_: {
		entry: {"file":"_app/immutable/start-e6b0c933.js","imports":["_app/immutable/start-e6b0c933.js","_app/immutable/chunks/index-11490f0a.js","_app/immutable/chunks/singletons-36ba774a.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "arbeitgeber",
				pattern: /^\/arbeitgeber\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "arbeitnehmer",
				pattern: /^\/arbeitnehmer\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "jobs",
				pattern: /^\/jobs\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "kontakt",
				pattern: /^\/kontakt\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "ueberuns",
				pattern: /^\/ueberuns\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
