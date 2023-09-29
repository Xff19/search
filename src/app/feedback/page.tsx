"use client";
// import type { Metadata } from 'next'
import { useRouter } from "next/navigation";
import React, { useState, FormEvent, ChangeEvent } from "react";
const instState = {
  name: "",
  email: "",
  message: "",
};
export default function Feedback() {
  const [data, setData] = useState(instState);
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = data;
    const res = await fetch("http://localhost:3000/api/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const datas = await res.json();
    if (
      Object.values(datas).every(
        (value) => value !== null && value !== undefined && value !== ""
      )
    ) {
      router.push("/thank-you");
      return;
    }
  };
  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <p>
          name
          <br />
          <input
            className="border-black border-2"
            type="text"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </p>
        <p>
          email <br />
          <input
            className="border-black border-2"
            type="text"
            value={data.email}
            onChange={(e) => {
              setData({ ...data, email: e.target.value });
            }}
          />
        </p>
        <p>
          message
          <br />
          <textarea
            className="border-black border-2"
            value={data.message}
            onChange={(e) => {
              setData({ ...data, message: e.target.value });
            }}
          ></textarea>
        </p>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
