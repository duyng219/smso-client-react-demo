import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:30405",
  // baseURL: "https://aedf-222-254-201-167.ap.ngrok.io",
});



const accessTokenHoc = (previousAPI) => {
  const innerAccessToken = async () => {
    const refreshToken = localStorage.getItem("refreshToken");
    const token = localStorage.getItem("token");
    const res = await instance.post(`api/Users/RefreshToken`, {
      token,
      refreshToken,
    });

    if (res) {
      if (res.data.token && res.data.refreshToken) {
        localStorage.setItem("token");
        localStorage.setItem("refreshToken");
        previousAPI.headers.Authorization = `Bearer ${token}`;
        return instance.request(previousAPI);
      } else {
        localStorage.setItem("");
        localStorage.setItem("");
      }
    }
  };
  return innerAccessToken;
};

instance.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token");
    config.headers.Authencation = `Bearer ${token}`;
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(null, function (error) {
  if (
    error.config &&
    error.response?.status === 401 &&
    !error.config.__isRetry
  ) {
    return new Promise((resolve, reject) => {
      const callAccess = accessTokenHoc(error.config);
      callAccess(error.config)
        .then((result) => {
          resolve(result);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
  return Promise.reject(error);
});

export default instance;
