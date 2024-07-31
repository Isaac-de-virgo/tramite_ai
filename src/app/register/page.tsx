"use client";

import axios from "axios";
import { FormEvent, useState } from "react";
import { ComponentNavbar } from "@/components/Navbar";
import { Card } from "flowbite-react";

function Registerpage() {
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    try {
      const res = await axios.post("/api/auth/register", {
        email: formData.get("email"),
        password: formData.get("password"),
        fullname: formData.get("fullname"),
      });
      setSuccessMessage("Registro exitoso");
      setErrorMessage("");
      console.log(res);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        const errorMsg = error.response.data?.message || "Error en el registro";
        setErrorMessage(errorMsg);
      } else {
        setErrorMessage("Error en el registro");
      }
      setSuccessMessage("");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <Card className="max-w-sm mt-8">
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
          <br />
          {successMessage && (
            <div className="bg-green-200 text-green-800 p-2 mb-4 rounded">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-200 text-red-800 p-2 mb-4 rounded">
              {errorMessage}
            </div>
          )}
        </form>
      </Card>
    </div>
  );
}

export default Registerpage;
