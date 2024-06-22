import baseUrl from "../Api/baseurl";

export const UsePostDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.post(url, params, config);
  return response;
};

export const UsePostDate = async (url, params) => {
  // const config = {
  //   headers: {
  //     Authorization: `Bearer ${localStorage.getItem("token")}`,
  //   },
  // };
  const response = await baseUrl.post(url, params);
  return response;
};
export const UsePostDateToken = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.post(url, params, config);
  return response;
};
