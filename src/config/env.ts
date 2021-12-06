export interface Environment {
    IS_PRODUCTION: boolean;
    API_BASE_URL: string;
}

export let ENV: Environment = {
    IS_PRODUCTION: process.env.ENVIRONMENT === 'production',
    API_BASE_URL: 'https://admin.energy5.com',
};
