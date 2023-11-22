import React, { useEffect, useState } from "react";
import style from "./login.module.css";
import { useFormik } from "formik";
import { useMutation } from "react-query";
import { loginMutation } from "./service";
import useLocalStorage from "../../helpers/localStorage";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setConfig } from "@/redux/globalSlice";

export default function Login() {
  const dispatch = useDispatch();

  let access_token = null;
  if (typeof window !== "undefined") {
    access_token = localStorage.getItem("access_token");
  }

  const router = useRouter();

  const { mutate, data, isLoading, isError, error } = useMutation(
    "login",
    async (values) => {
      const data = await loginMutation(values);
      //console.log(data);
      dispatch(setConfig(data));
    }
  );

  const doLogin = (value) => {
    mutate(value);
  };

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: doLogin,
  });

  useEffect(() => {
    if (access_token) {
      router.replace("/home");
    }
  }, [access_token]);

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <h1>BRIN Project</h1>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            onChange={handleChange}
            placeholder="username"
            id="username"
            name="username"
          />
          <label>Password</label>
          <input
            onChange={handleChange}
            placeholder="password"
            id="password"
            name="password"
            type="password"
          />
          <div className={style.buttonContainer}>
            <button type="submit">Login</button>
          </div>
        </form>
        {/* <button onClick={handleClick}> Pindah ke Halaman Utama</button> */}
      </div>
    </div>
  );
}
