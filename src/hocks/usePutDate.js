import baseUrl from "../Api/baseurl";

export const UsePutDataWithImage = async (url, params) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const response = await baseUrl.put(url, params, config);
  return response;
};
