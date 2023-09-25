import React from "react";
import type { Metadata } from "next";
import getAllUsers from "../../../lib/getAllUsers";
import Link from "next/link";
export const metadata: Metadata = {
  title: "user",
};
export default async function User() {
  const allUsers: Promise<User[]> = getAllUsers();
  const users = await allUsers;
  return (
    <div>
      <section>
        <h2>
          <Link href="/">back to home</Link>
        </h2>
        <br />
        {users.map((item) => (
          <li key={item.id}>
            <Link href={`/user/${item.id}`}>{item.name}</Link>
          </li>
        ))}
      </section>
    </div>
  );
}
