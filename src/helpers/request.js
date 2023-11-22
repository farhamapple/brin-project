import axios from "axios";

const url = process.env.NEXT_PUBLIC_BASE_URL;

export const request = async (patUrl, method = "GET", options = {}) => {
  //console.log(imageReadUrl)

  const accessToken = localStorage.getItem("access_token");

  try {
    let headers = {};
    if (accessToken) {
      headers["Authorization"] = `Bearer ${accessToken}`;
    }

    const res = await axios(`${url}${patUrl}`, {
      ...options,
      method,
      headers,
    });

    if (res.status === 200 || res.status === 201) {
      return res.data;
    }
  } catch (error) {
    console.log(error);
    return error;
  }
};
