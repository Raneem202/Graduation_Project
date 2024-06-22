import baseUrl from "../Api/baseurl";

export const UseGetDate = async (url) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const response = await baseUrl.get(url, config);
  return response;
};
export const UseGetDateWithoutToken = async (url) => {
  const response = await baseUrl.get(url);
  return response;
};

export const UseGetDateToken = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.get(url, {
    ...params,
    ...config,
  });
  return response;
};
