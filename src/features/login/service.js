import { request } from "@/helpers/request";

export const loginMutation = async (values) => {
  const res = await request("/authenticate", "POST", { data: values });

  if (res.access_token) {
    localStorage.setItem("access_token", res.access_token);
  }
  const dataResult = {
    name: res.pegawaiData.name,
    access_token: res.access_token,
  };

  return dataResult;
};
