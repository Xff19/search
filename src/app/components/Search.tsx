"use client";

import { useRouter } from "next/navigation";
import React, { useState,FormEvent } from "react";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const onSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("")
    router.push(`/${search}`);
  };
  return (
    <div> 
      <form className="w-500 flex justify-center md:justfy-between" onSubmit={onSubmit}>
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          placeholder="Search"
          className="bg-white p-2 w-80 text-xl rounded-xl text-blue-300 "
        />
        <button type="submit" className="p-2 text-xl roundes-xl bg-slate-300 ml-2 font-bold">
            🚀
        </button>
      </form>
    </div>
  );
}
