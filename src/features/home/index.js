import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const name = useSelector((state) => state.global_slice.config.name);
  return <div>Welcome {name}</div>;
}
