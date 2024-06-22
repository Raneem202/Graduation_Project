import baseUrl from "../Api/baseurl";

export const UsePutDateToken = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.put(url, params, config);
  return response;
};

export const UsePutFormToken = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.put(url, params, config);
  return response;
};
