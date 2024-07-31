"use client";

import axios from "axios";
import { FormEvent } from "react";
import { ComponentNavbar } from "@/components/Navbar";
import { Card } from "flowbite-react";
function Registerpage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    try {
      const res = await axios.post("/api/auth/register", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname"),
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Card className="max-w-sm">
        <form onSubmit={handleSubmit}>
          <h1 className="text-center">Registrate</h1>

          <input
            type="text"
            placeholder="Peter Ospina"
            name="fullname"
            className="bg-white px-4 py-2 block mb-2"
          />
          <input
            type="email"
            placeholder="PeterOspina@mail.com"
            name="email"
            className="bg-white px-4 py-2 block mb-2"
          />
          <input
            type="password"
            placeholder="*******"
            name="password"
            className="bg-white px-4 py-2 block mb-2"
          />
          <div className="flex justify-center mt-4">
            <button className="bg-gradient-to-r from-brave-orange to-brave-orange-dark text-white font-bold py-2 px-4 rounded">
              Register
            </button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Registerpage;
