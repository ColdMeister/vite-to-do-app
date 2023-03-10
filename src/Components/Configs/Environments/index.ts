export default {
  API_END_POINT: import.meta.env.VITE_APP_URL + `/api/v1`,
  ASSETS_END_POINT: import.meta.env.VITE_IS_STORYBOOK
    ? `assets`
    : `${import.meta.env.VITE_APP_URL}/assets/`,
  PROD: import.meta.env.PROD,
};
