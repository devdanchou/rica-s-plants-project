const CAPSTONE_SESSION_TOKEN_KEY = "capstone_session_token";

export const setSessionTokenStorage = (capstoneSessionToken) =>
  localStorage.setItem(CAPSTONE_SESSION_TOKEN_KEY, capstoneSessionToken);

export const getSessionTokenStorage = () =>
  localStorage.getItem(CAPSTONE_SESSION_TOKEN_KEY);

export const removeSessionTokenStorage = () =>
  localStorage.removeItem(CAPSTONE_SESSION_TOKEN_KEY);
