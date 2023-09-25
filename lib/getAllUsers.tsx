import React from "react";

export default async function getAllUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{next:{revalidate:60}});// isr
  if (!res.ok) undefined
  return res.json();
}
