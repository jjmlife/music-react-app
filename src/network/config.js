const devBaseURL = "http://47.105.178.171:3000";
const proBaseURL = "http://47.105.178.171:3000";
export const BASE_URL = process.env.NODE_ENV === 'development' ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
