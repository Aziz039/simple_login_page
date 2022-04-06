export const BASE_URL = {
	LOCAL: "http://localhost:2030/api/",
	DEV: "http://dev.censorit.net:2030/api/",
	PROD: "http://dashboard.censorit.net:2030/api/",
};

export const environmentURL = BASE_URL.DEV;

const APP_CONSTANTS = {
	APP_NAME: "CensorIT",
	CONFIG: {
		API_KEY: {
			WEB: "",
		},
		APIs: {
			AUTH: {
				LOGIN: environmentURL + "auth/login"
			},
            USER: {
                getCompany: environmentURL + "company/getCompany"
            }
		},
		CONTENT_TYPE: "application/json",

		sessionStorage: {
			TOKEN: "TOKEN",
			isLogged: "isLogged",
            USER_ID: "USER_ID",
            COMPANY_ID: "COMPANY_ID"
		},
	}, 
};

export default APP_CONSTANTS;