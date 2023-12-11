import axios from "axios";

export const useRefesh = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const accessToken = localStorage.getItem("chr-accessToken");

  const _response = axios({
    method: "patch",
    url: `${baseURL}/auth`,
    withCredentials: true,
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  }).catch((err) => console.log(err));
  console.log(_response);
};
